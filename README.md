# 🧪 SDET Architect Portfolio

> A production-grade test automation portfolio showcasing enterprise-level frameworks across **Mobile**, **Web**, and **API** domains — built by a Senior SDET with a passion for scalable quality engineering.

---

## 🏛️ Portfolio Architecture

```
SDET-Architect-Portfolio/
├── 📱 Mobile-Automation-Cloud/     ← Appium 3.x + Sauce Labs RDC
├── 🌐 Web-Automation-Selenium/     ← Selenium + Pytest (Coming Soon)
├── ⚙️ API-Backend-Automation/      ← REST API + Schema Validation (Coming Soon)
├── 🛠️ Tools-I-Have-Created/        ← Custom QA Tools & Frameworks
│   └── Headless-CRUD-Validator/    ← API vs DB Data Integrity Validator
└── 🎓 Certifications-And-Learnings/← AWS Cloud Practitioner & More
```

---

## 📱 Mobile Automation — Cloud (Sauce Labs)

**Status**: ✅ **Complete**

A cloud-native mobile automation framework engineered for real device execution at scale.

| Feature | Detail |
|---|---|
| **Engine** | Appium 3.x (W3C Protocol) |
| **Cloud** | Sauce Labs Real Device Cloud |
| **Platform** | Android 14+ |
| **Runner** | Pytest with Modular Fixtures |
| **Reporting** | Allure Dashboard + Pytest-HTML |

### Key Highlights
- Centralized driver lifecycle management via `conftest.py`
- Full W3C WebDriver protocol compliance
- Automated screenshot capture on failure
- Executive-level Allure reporting with trend analysis

👉 [**Explore Mobile Framework →**](./Mobile-Automation-Cloud/)

---

## 🌐 Web Automation — Selenium

**Status**: 🔜 **Coming Day 3**

Next-gen browser automation framework with Page Object Model architecture.

| Feature | Detail |
|---|---|
| **Engine** | Selenium 4.x |
| **Pattern** | Page Object Model (POM) |
| **Browsers** | Chrome, Firefox, Edge |
| **Runner** | Pytest |

👉 [**Explore Web Framework →**](./Web-Automation-Selenium/)

---

## ⚙️ API Backend Automation

**Status**: 🔜 **Coming Day 5**

RESTful API testing framework with schema validation and data-driven testing.

| Feature | Detail |
|---|---|
| **Library** | Requests + JsonSchema |
| **Approach** | Data-Driven + Contract Testing |
| **Auth** | OAuth 2.0 / Token-based |
| **Runner** | Pytest |

👉 [**Explore API Framework →**](./API-Backend-Automation/)

---

## 🛠️ Tools I Have Created

### 🔍 Headless CRUD Validator for Microservices

**Status**: ✅ **Complete**

A headless validation framework that cross-validates API responses against database state — ensuring data integrity without a UI.

| Feature | Detail |
|---|---|
| **Language** | Python 3.9+ |
| **Database** | SQLite (headless, no server) |
| **API Client** | Requests (multi-backend) |
| **Tests** | 13 validation tests |
| **Architecture** | Modular (API, DB, Test layers) |

### Key Highlights
- Cross-validates API responses against database records
- Reusable API client supporting multiple backends
- Parametrized test suites for scalable validation
- Session-scoped fixtures for efficient test execution

👉 [**Explore Headless CRUD Validator →**](./Tools-I-Have-Created/Headless-CRUD-Validator/)

---

## 🎓 Certifications & Learnings

| Certification | Status |
|---|---|
| AWS Cloud Practitioner | 📚 In Progress |

👉 [**View Certifications →**](./Certifications-And-Learnings/)

---

## 🛠️ Technology Stack

<table>
<tr>
<td align="center"><b>Languages</b></td>
<td>Python 3.9+</td>
</tr>
<tr>
<td align="center"><b>Test Runner</b></td>
<td>Pytest (Fixtures, Parametrize, Markers)</td>
</tr>
<tr>
<td align="center"><b>Mobile</b></td>
<td>Appium 3.x, Sauce Labs RDC</td>
</tr>
<tr>
<td align="center"><b>Web</b></td>
<td>Selenium 4.x (Coming Soon)</td>
</tr>
<tr>
<td align="center"><b>API</b></td>
<td>Requests, JSON Schema (Coming Soon)</td>
</tr>
<tr>
<td align="center"><b>Reporting</b></td>
<td>Allure, Pytest-HTML</td>
</tr>
<tr>
<td align="center"><b>CI/CD</b></td>
<td>GitHub Actions (Planned)</td>
</tr>
<tr>
<td align="center"><b>Cloud</b></td>
<td>AWS, Sauce Labs</td>
</tr>
</table>

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/galagaliprashant/SDET-Architect-Portfolio.git
cd SDET-Architect-Portfolio

# Install dependencies
pip install -r requirements.txt

# Run mobile tests
pytest Mobile-Automation-Cloud/test_mobile_cloud.py --alluredir=allure-results

# View Allure report
allure serve allure-results
```

---

## 📬 Contact

**Prashanth Galagali**
- 🔗 [LinkedIn](https://www.linkedin.com/in/prashanth-galagali/)
- 📧 Email: prashanthgalagali@gmail.com
- 🐙 [GitHub](https://github.com/galagaliprashant)

---

> ⭐ *If you find this portfolio valuable, consider giving it a star!*
