# Prashanth Galagali - SDET Portfolio

A modern, interactive portfolio showcasing my expertise in Software Development Engineering in Test (SDET), automation frameworks, and quality engineering.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/galagaliprashant/prashanth-s-sdet-portfolio-studio)

## 🚀 About

This portfolio highlights my professional journey as an SDET and Automation Engineer, featuring:

- **Featured Projects**: Comprehensive automation frameworks and testing solutions
- **Case Studies**: In-depth technical write-ups of key projects
- **Skills & Expertise**: API, Web, Mobile automation, and continuous testing
- **Contact Information**: Easy ways to connect and collaborate

---

## ✨ Featured Projects

### 🔥 Headless CRUD Validator for Microservices

**Performance Improvement: 97% (45s → 1.2s)**

A lightweight Python CRUD Bot that validates Booking Engine core logic without UI dependencies. This project demonstrates:
- Stateful execution with dynamic authentication
- Deep JSON schema validation
- Self-cleaning teardown mechanisms
- CI/CD pipeline integration

📖 **[Read the full case study below ↓](#-case-study--headless-crud-validator-for-microservices)**

---

### 🧪 API Test Framework
> **Tech Stack**: Java · RestAssured · TestNG · Allure · Maven

A comprehensive REST API testing framework built for enterprise-grade backend validation.

| Feature | Description |
|---|---|
| **Data-Driven Testing** | Parameterized tests with Excel/JSON data sources for scalable coverage |
| **Parallel Execution** | TestNG suite configuration for concurrent API test runs |
| **Allure Reporting** | Rich interactive reports with request/response capture and trend analysis |
| **Auth Management** | Automated OAuth 2.0 token generation and session management |
| **Schema Validation** | JSON Schema contract testing to catch structural API regressions |

---

### 🌐 E2E Web Automation Suite
> **Tech Stack**: Python · Selenium 4.x · Cucumber · Jenkins · Docker

A Selenium-based Page Object Model framework for e-commerce end-to-end testing.

| Feature | Description |
|---|---|
| **Page Object Model** | Clean separation of page elements and test logic for maintainability |
| **BDD Integration** | Cucumber Gherkin scenarios enabling collaboration with non-technical stakeholders |
| **Cross-Browser** | Chrome, Firefox, Edge execution via Selenium Grid |
| **CI/CD Pipeline** | Jenkins pipeline with Dockerized browser containers for consistent execution |
| **Screenshot on Failure** | Automatic evidence capture with embedded screenshots in reports |

---

### 📊 Cypress Test Dashboard
> **Tech Stack**: Cypress · TypeScript · React · Chart.js · Node.js

A modern React dashboard for real-time test analytics and reporting.

| Feature | Description |
|---|---|
| **Real-Time Metrics** | Live test pass/fail rates, execution trends, and flakiness detection |
| **Interactive Charts** | Chart.js visualizations for execution history and failure analysis |
| **Test Categorization** | Filter by suite, status, duration, and environment |
| **Failure Analysis** | Drill-down into failed tests with error logs, screenshots, and video playback |
| **Export Reports** | PDF and CSV export for stakeholder reporting |

---

### 📱 Mobile Test Automation
> **Tech Stack**: Appium · Java · XCUITest · Espresso · AWS Device Farm

A cross-platform mobile testing solution for iOS and Android applications.

| Feature | Description |
|---|---|
| **Cross-Platform** | Single codebase testing both Android and iOS native apps |
| **Gesture Testing** | Swipe, pinch, long-press, and multi-touch gesture automation |
| **Visual Validation** | Screenshot comparison for UI regression detection |
| **Cloud Execution** | AWS Device Farm integration for testing on 100+ real devices |
| **Parallel Execution** | Concurrent test runs across multiple device configurations |

---

### ⚡ Performance Testing Toolkit
> **Tech Stack**: JMeter · Grafana · InfluxDB · Python · Kubernetes

A JMeter-based performance testing suite with real-time observability.

| Feature | Description |
|---|---|
| **Load Testing** | Configurable user load profiles (ramp-up, spike, soak testing) |
| **Grafana Dashboards** | Real-time performance metrics: response time, throughput, error rate |
| **InfluxDB Backend** | Time-series data storage for historical trend analysis |
| **Threshold Validation** | Automated pass/fail based on SLA thresholds (P95 response time, error %) |
| **K8s Integration** | Distributed load generation on Kubernetes for large-scale tests |

---

## 📖 Case Study — Headless CRUD Validator for Microservices

### 📌 Overview

| Metric | Before | After |
|---|---|---|
| **Execution Time** | 45 seconds (UI-based) | 1.2 seconds (API-based) |
| **Performance Gain** | — | **97% faster** |
| **Test Stability** | ~70% (flaky UI) | **100% reliable** |

---

### ❌ The Problem

In our CI/CD pipeline, waiting for the UI to load just to test backend logic was causing significant bottlenecks.

> **"Traditional UI-based testing was taking 45 seconds per test cycle, with frequent flakiness due to UI rendering lag, network delays, and browser inconsistencies. This was unacceptable for a modern CI/CD pipeline that demanded speed and reliability."**

**Pain Points:**
- 🐌 Slow feedback loop — developers waited 5+ minutes for test results
- 🎯 Flaky tests — UI rendering caused ~30% false failures
- 💰 High infra costs — required browser instances and Selenium Grid
- 🔄 Blocked deployments — pipeline failures delayed releases

---

### ✅ The Solution

I architected a **lightweight Python CRUD Bot** that acts as a headless client, directly interfacing with the microservices API layer — bypassing the UI entirely.

#### Three-Phase Architecture:

```
┌─────────────────────────────────────────────────────────┐
│                    SETUP PHASE                          │
│  • Authenticate with API                                │
│  • Generate session tokens                              │
│  • Configure test environment                           │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                  EXECUTION PHASE                        │
│  • CREATE → Booking entry → Capture dynamic Booking ID  │
│  • READ   → Fetch booking → Validate JSON schema        │
│  • UPDATE → Modify fields → Verify state change         │
│  • DELETE → Remove entry  → Confirm 404 response        │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                  TEARDOWN PHASE                         │
│  • Delete all test data created during execution        │
│  • Verify environment is clean                          │
│  • Generate execution report                            │
└─────────────────────────────────────────────────────────┘
```

#### Core Design Pillars:

| Pillar | Implementation |
|---|---|
| 🔐 **Stateful Execution** | Handles dynamic authentication (Token generation) and passes session headers automatically across all requests |
| ✅ **Deep Schema Validation** | Instead of just checking for `200 OK`, it extracts the dynamic Booking ID and performs deep verification of the JSON payload structure |
| 🧹 **Self-Cleaning Teardown** | Implements a cleanup phase that deletes test data after validation, ensuring staging environments never get cluttered |
| 🔄 **CI/CD Native** | Designed to run headlessly in GitHub Actions / Jenkins with zero manual intervention |

---

### 🔧 Technical Implementation

**Sample Execution Flow:**

```python
# 1. SETUP — Authenticate and get token
auth_response = requests.post(f"{BASE_URL}/auth", json=credentials)
token = auth_response.json()["token"]
headers = {"Cookie": f"token={token}"}

# 2. CREATE — Generate a new booking
booking_payload = {
    "firstname": "Prashanth",
    "lastname": "Galagali",
    "totalprice": 150,
    "depositpaid": True,
    "bookingdates": {"checkin": "2024-01-01", "checkout": "2024-12-01"},
    "additionalneeds": "QA Validation"
}
create_response = requests.post(f"{BASE_URL}/booking", json=booking_payload)
booking_id = create_response.json()["bookingid"]

# 3. READ — Validate the created booking
get_response = requests.get(f"{BASE_URL}/booking/{booking_id}")
assert get_response.json()["firstname"] == "Prashanth"  # Deep validation

# 4. UPDATE — Modify and verify
update_payload = {"firstname": "Updated_Prashanth"}
requests.patch(f"{BASE_URL}/booking/{booking_id}", json=update_payload, headers=headers)

# 5. DELETE — Clean up and confirm
requests.delete(f"{BASE_URL}/booking/{booking_id}", headers=headers)
verify = requests.get(f"{BASE_URL}/booking/{booking_id}")
assert verify.status_code == 404  # Confirmed deleted
```

**Tech Stack:**

`Python` · `requests` · `JSON Schema` · `REST API` · `pytest` · `CI/CD`

---

### 📈 The Impact

| Metric | Result |
|---|---|
| ⚡ **Speed** | Reduced from **45s → 1.2s** per test cycle (97% improvement) |
| 🎯 **Reliability** | Achieved **100% test stability** — zero flaky failures |
| 💰 **Cost Savings** | Eliminated need for browser infrastructure (Selenium Grid) |
| 🚀 **CI/CD Pipeline** | Test feedback time reduced from **5 minutes to 30 seconds** |
| 👨‍💻 **Developer Productivity** | Engineers deploy with confidence — faster feedback loops |

> *This solution transformed our testing strategy, enabling faster feedback loops and more confident deployments. The team can now run comprehensive API validation in seconds rather than minutes.*

---

### 🎯 Lessons Learned

- ✅ **Not every test needs a UI** — headless validation is often faster and more reliable
- ✅ **Proper teardown is crucial** — maintaining clean test environments prevents data pollution
- ✅ **Deep schema validation catches more bugs** — status code checks alone are not enough
- ✅ **Stateful session management is essential** — realistic API testing requires proper auth flows
- ✅ **Design for CI/CD first** — headless tools integrate seamlessly into automated pipelines

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router v6

### Testing & Automation
- **Languages**: Python, Java, JavaScript/TypeScript
- **API Testing**: RestAssured, requests, Postman
- **Web Automation**: Selenium, Cypress, Playwright
- **Mobile Testing**: Appium, XCUITest, Espresso
- **Performance**: JMeter, Grafana, InfluxDB
- **CI/CD**: Jenkins, GitHub Actions, Docker

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/galagaliprashant/prashanth-s-sdet-portfolio-studio.git
   cd prashanth-s-sdet-portfolio-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 📁 Project Structure

```
prashanth-s-sdet-portfolio-studio/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── Index.tsx
│   │   ├── HeadlessCrudValidatorCaseStudy.tsx
│   │   └── NotFound.tsx
│   ├── assets/             # Images and static files
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── public/                 # Public assets
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Modern dark theme with custom color palette
- **Smooth Animations**: Framer Motion for engaging interactions
- **3D Background**: Three.js integration for visual appeal
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized with Vite for lightning-fast builds
- **Type Safe**: Full TypeScript support

## 🔗 Key Routes

- `/` - Home page with all sections
- `/case-study/headless-crud-validator` - Detailed case study

## 📧 Contact

- **Email**: [galagaliprashanth@gmail.com](mailto:galagaliprashanth@gmail.com)
- **LinkedIn**: [linkedin.com/in/prasshanth-galagali](https://www.linkedin.com/in/prasshanth-galagali/)
- **GitHub**: [github.com/galagaliprashant](https://github.com/galagaliprashant)

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome! Feel free to:
1. Open an issue for bugs or suggestions
2. Fork the repository for your own portfolio
3. Submit a pull request with improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- 3D graphics with [Three.js](https://threejs.org/)

---

**Made with ❤️ by Prashanth Galagali**

*SDET | Automation Engineer | Quality Enthusiast*
