// Full-page screenshot via Chrome DevTools Protocol (no npm deps; needs Node 22+ for global WebSocket).
// Usage: node screenshot.mjs http://localhost:3000 [label] [width=1280] [height=900]
import { spawn } from 'node:child_process';
import { mkdirSync, readdirSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url = 'http://localhost:3000', label = '', W = '1280', H = '900'] = process.argv.slice(2);
const outDir = 'temporary screenshots';
mkdirSync(outDir, { recursive: true });
const n = readdirSync(outDir).map(f => +(f.match(/^screenshot-(\d+)/)?.[1] || 0)).reduce((a, b) => Math.max(a, b), 0) + 1;
const out = join(outDir, `screenshot-${n}${label ? '-' + label : ''}.png`);

const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(process.env.CHROME || 'google-chrome', [
  '--headless=new', '--no-sandbox', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'shot-'))}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = ms => new Promise(r => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page'); } catch {}
  if (!target) await sleep(200);
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));
let id = 0; const pending = new Map();
ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Emulation.setDeviceMetricsOverride', { width: +W, height: +H, deviceScaleFactor: 1, mobile: +W < 600 });
await send('Page.enable');
await send('Page.navigate', { url });
await sleep(2500);
// Scroll through the page so scroll-triggered reveals fire, then return to top
await send('Runtime.evaluate', { awaitPromise: true, expression: `(async () => {
  document.documentElement.style.scrollBehavior = 'auto';
  for (let y = 0; y < document.documentElement.scrollHeight; y += ${+H / 2}) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
  window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 1500));
})()` });
const hidden = await send('Runtime.evaluate', { expression: "document.querySelectorAll('.reveal:not(.is-in)').length" });
console.log('unrevealed elements:', hidden.result.value);
const { result } = await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight' });
const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: +W, height: result.value, scale: 1 } });
writeFileSync(out, Buffer.from(shot.data, 'base64'));
console.log(out);
ws.close(); chrome.kill();
