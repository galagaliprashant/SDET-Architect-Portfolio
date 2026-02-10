# 📱 Mobile Automation — Cloud (Sauce Labs)

## Overview
A production-grade mobile automation framework engineered for high-scale, cross-platform execution on real devices via **Sauce Labs Real Device Cloud**.

## 🏗️ Architecture

```
Mobile-Automation-Cloud/
├── conftest.py          # Centralized Appium driver lifecycle manager
├── test_mobile_cloud.py # Cloud-based mobile test suite
└── README.md            # Documentation
```

## 🛠️ Technology Stack
- **Language**: Python 3.9+
- **Test Runner**: Pytest (Modular Fixtures)
- **Automation Engine**: Appium 3.x (W3C Protocol)
- **Cloud Backend**: Sauce Labs Real Device Cloud
- **Target Platform**: Android 14+
- **Reporting**: Allure Dashboard & Pytest-HTML

## ⚡ Key Design Decisions

### 1. Global Driver Management
The `conftest.py` serves as the centralized engine for managing the Appium driver lifecycle across all test suites. This avoids redundant driver instantiation and ensures clean session teardown.

### 2. W3C Protocol Compliance
Fully migrated to Appium 3.x W3C standards to ensure compatibility with modern mobile security architectures and OS-level restrictions on Android 14+.

### 3. Cloud-Native Integration
Engineered specifically for Sauce Labs RDC, enabling:
- High-fidelity testing on physical hardware
- Elimination of local emulator flakiness
- Parallel execution across multiple real devices

## 📊 Reporting
- **Allure Dashboard**: Interactive graphs, trend analysis, and step-by-step execution logs
- **Evidence Collection**: Automated screenshot capture embedded into reports on failure

## 🚀 Running Tests

```bash
# Install dependencies
pip install pytest appium-python-client allure-pytest

# Execute tests
pytest test_mobile_cloud.py --alluredir=allure-results -v

# Generate Allure report
allure serve allure-results
```

## 🔧 Configuration
Set the following environment variables for Sauce Labs:

```bash
export SAUCE_USERNAME=your_username
export SAUCE_ACCESS_KEY=your_access_key
```
