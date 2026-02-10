# 🌐 Web Automation — Selenium

> 🔜 **Coming Soon — Day 3**

## Planned Architecture

```
Web-Automation-Selenium/
├── conftest.py          # Browser setup & teardown
├── pages/               # Page Object Model classes
│   ├── base_page.py
│   ├── login_page.py
│   └── shop_page.py
└── tests/
    ├── test_login.py
    ├── test_shop.py
    └── test_checkout.py
```

## Planned Tech Stack
- **Engine**: Selenium 4.x
- **Pattern**: Page Object Model (POM)
- **Browsers**: Chrome, Firefox, Edge
- **Runner**: Pytest
- **Reporting**: Allure + Pytest-HTML

## What's Coming
- ✅ Cross-browser testing
- ✅ Page Object Model architecture
- ✅ Data-driven parametrized tests
- ✅ Screenshot capture on failure
- ✅ CI/CD integration with GitHub Actions
