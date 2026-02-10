# ⚙️ API Backend Automation

> 🔜 **Coming Soon — Day 5**

## Planned Architecture

```
API-Backend-Automation/
├── conftest.py           # API client fixtures
├── schemas/              # JSON Schema definitions
│   ├── user_schema.json
│   └── order_schema.json
└── tests/
    ├── test_users_api.py
    ├── test_orders_api.py
    └── test_auth.py
```

## Planned Tech Stack
- **Library**: Requests + JsonSchema
- **Approach**: Data-Driven + Contract Testing
- **Auth**: OAuth 2.0 / Token-based
- **Runner**: Pytest
- **Reporting**: Allure + Pytest-HTML

## What's Coming
- ✅ RESTful API CRUD operations
- ✅ JSON Schema contract validation
- ✅ Authentication & authorization testing
- ✅ Data-driven parametrized tests
- ✅ Response time assertions
- ✅ API vs Database validation
