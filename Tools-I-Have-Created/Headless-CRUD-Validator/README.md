# 🔍 Headless CRUD Validator for Microservices

## Overview
A headless validation framework that cross-validates **API responses against database state** to ensure data integrity across microservices — without requiring a UI layer.

This tool is designed for backend QA engineers who need to verify that what the API returns is **exactly** what the database stores.

---

## 🏗️ Architecture

```
Headless-CRUD-Validator/
├── api_framework/
│   ├── __init__.py
│   └── api_client.py          # Reusable REST API client (GET, POST)
├── utils/
│   ├── __init__.py
│   └── db_manager.py          # SQLite database manager with CRUD operations
├── tests/
│   ├── __init__.py
│   ├── conftest.py            # Pytest fixtures (DB setup/teardown)
│   ├── test_database.py       # Database CRUD operation tests
│   └── test_users.py          # User-specific validation tests
└── README.md
```

---

## 💡 What Problem Does This Solve?

In microservice architectures, **data inconsistency** between the API layer and the database is a critical bug source. This tool:

1. **Seeds a local database** with expected data (mirroring the backend)
2. **Runs automated validations** to verify CRUD operations work correctly
3. **Cross-references API responses** against database records
4. **Catches data drift** — when what the API returns doesn't match what's stored

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| **Language** | Python 3.9+ |
| **Test Runner** | Pytest (Fixtures, Parametrize, Markers) |
| **Database** | SQLite (lightweight, no server needed) |
| **API Client** | Requests library |
| **Architecture** | Modular — separates API, DB, and test layers |

---

## ⚡ Key Features

### 1. Reusable API Client (`api_client.py`)
- Multi-API support (ReqRes, GoRest, DummyJSON)
- Clean GET/POST abstraction
- Instance-based design for testing multiple backends

### 2. Database Manager (`db_manager.py`)
- Auto table creation with schema definition
- Data seeding with `INSERT OR IGNORE` (idempotent)
- Clean query interface with parameterized queries
- Proper connection lifecycle management

### 3. Session-Scoped Fixtures (`conftest.py`)
- Single database setup for entire test session
- Automatic teardown after all tests complete
- Dynamic method injection for flexibility

### 4. Comprehensive Test Suites
- **`test_database.py`** — CRUD operations, multi-user retrieval, edge cases
- **`test_users.py`** — Email format validation, parametrized name checks, invalid ID handling

---

## 🚀 Quick Start

```bash
# Install dependencies
pip install pytest requests

# Run all tests
pytest tests/ -v -s

# Run specific test suite
pytest tests/test_database.py -v -s
pytest tests/test_users.py -v -s

# Run with Allure reporting
pytest tests/ -v -s --alluredir=allure-results
allure serve allure-results
```

---

## 📊 Test Coverage

| Test Suite | Tests | Description |
|---|---|---|
| `test_database.py` | 6 | CRUD ops, multi-user retrieval, connection health, parametrized email checks |
| `test_users.py` | 7 | User existence, email format, parametrized names, invalid IDs |
| **Total** | **13** | Full data integrity validation |

---

## 🧪 Sample Test Output

```
tests/test_database.py::TestDatabaseOperations::test_get_user_by_id PASSED
tests/test_database.py::TestDatabaseOperations::test_get_multiple_users PASSED
tests/test_database.py::TestDatabaseOperations::test_user_not_found PASSED
tests/test_database.py::TestDatabaseIntegration::test_database_connection PASSED
tests/test_database.py::TestDatabaseIntegration::test_user_emails[1-george.bluth@reqres.in] PASSED
tests/test_database.py::TestDatabaseIntegration::test_user_emails[2-janet.weaver@reqres.in] PASSED
tests/test_database.py::TestDatabaseIntegration::test_user_emails[3-emma.wong@reqres.in] PASSED
tests/test_users.py::TestUserDatabase::test_verify_user_exists PASSED
tests/test_users.py::TestUserDatabase::test_user_email_format PASSED
tests/test_users.py::TestUserDatabase::test_user_names[1-George-Bluth] PASSED
tests/test_users.py::TestUserDatabase::test_user_names[2-Janet-Weaver] PASSED
tests/test_users.py::TestUserDatabase::test_user_names[3-Emma-Wong] PASSED
tests/test_users.py::TestUserDatabase::test_invalid_user_id PASSED

========================= 13 passed =========================
```

---

## 📬 Author
**Prashanth Galagali** — SDET | Test Automation Engineer
