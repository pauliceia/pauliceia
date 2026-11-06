# Contributing Guide — Pauliceia 2.0

This document defines the naming conventions and workflow standards for **Issues**, **Branches**, **Pull Requests**, and **Commits** in the Pauliceia 2.0 project.

The goal is to maintain organization, traceability, and consistency across the repository as the team grows.

---

## Table of Contents

- [Issues](#issues)
- [Branches](#branches)
- [Pull Requests](#pull-requests)
- [Commits](#commits)
- [Complete Workflow: Issue to Done](#complete-workflow-issue-to-done)

---

## Issues

Issue titles must start with a **category in brackets**, followed by a short, objective description in English (or aligned with the Issue template).

### Categories

| Prefix       | When to use                                                   |
| :----------- | :------------------------------------------------------------ |
| `[FEATURE]`  | Propose a new feature or enhancement                          |
| `[FIX]`      | Fix a known problem or defect                                 |
| `[BUG]`      | Report an unexpected behavior or bug identified               |
| `[DOCS]`     | Create, update, or standardize documentation                  |
| `[REFACTOR]` | Refactor code without changing external behavior              |
| `[CHORE]`    | Technical maintenance tasks (dependencies, CI, configuration) |

### Format

```text
[CATEGORY] Short and objective description
```

### Examples

```text
[FEATURE] Add layer filtering by time period
[FIX] Fix error popup on valid geocoding coordinates
[BUG] Map fails to load layers after user login
[DOCS] Standardize repository README
[REFACTOR] Simplify authentication store module
[CHORE] Configure CI pipeline on GitHub Actions
```

---

## Branches

Branches must be created from the target base branch (`master`) following the format:

```text
type/issue-number-short-description
```

- Use **kebab-case** (lowercase words separated by hyphens).
- Always include the related **Issue number**.
- Keep the description short and clear (2–4 words in English).

### Branch Types

| Type       | When to use                     |
| :--------- | :------------------------------ |
| `feature`  | New functionality               |
| `fix`      | Bug or defect fix               |
| `docs`     | Documentation changes           |
| `refactor` | Code refactoring                |
| `chore`    | Maintenance and technical tasks |
| `hotfix`   | Urgent production fix           |

### Examples

```text
feature/201-layer-period-filter
fix/202-geocoding-error-popup
docs/205-standardize-readme
refactor/208-simplify-auth-service
chore/212-update-webpack-dependencies
hotfix/215-urgent-login-fix
```

---

## Pull Requests

Pull Request titles must follow the **[Conventional Commits](https://www.conventionalcommits.org/)** specification.

### Format

```text
type: short description in imperative mood
```

Optionally, include a **scope** in parentheses:

```text
type(scope): short description in imperative mood
```

### PR Types

| Type       | When to use                          |
| :--------- | :----------------------------------- |
| `feat`     | New feature                          |
| `fix`      | Bug fix                              |
| `docs`     | Documentation                        |
| `refactor` | Code refactoring                     |
| `chore`    | Maintenance and technical tasks      |
| `style`    | Formatting changes (no logic impact) |
| `test`     | Adding or updating tests             |
| `ci`       | CI/CD configuration                  |

### Examples

```text
feat: add layer filtering by time period
fix: fix false error popup on geocoding search
fix(geocoding): validate point coordinates before rendering
docs: standardize repository README
refactor: simplify authentication logic
chore: update Webpack dependencies
```

### PR Body & Issue Linking

In the Pull Request description, briefly summarize what was changed and link the related Issue using the `Closes` keyword so GitHub automatically closes it when merged:

```text
Closes #205
```

> If a PR only addresses part of a larger Issue, use `Part of #205` instead.

---

## Commits

Commits must follow the **[Conventional Commits](https://www.conventionalcommits.org/)** standard.

### Format

```text
type(optional scope): description in imperative mood
```

### Examples

```text
feat: add export layer button
fix(geocoding): fix address search query
docs: standardize repository README
refactor: remove unused state properties in Vuex
chore: configure ESLint v9 rules
test: add user registration step definitions
```

> **Full specification:** [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

---

## Complete Workflow: Issue to Done

Below is a practical end-to-end example connecting an Issue, Branch, Pull Request, Code Review, and Project Board status:

### Practical Example

- **Issue:**
  ```text
  #205 [DOCS] Standardize README
  ```
- **Branch:**
  ```text
  docs/205-standardize-readme
  ```
- **Pull Request (#210):**
  - **Title:** `docs: standardize repository README`
  - **Body:** `Closes #205`

### Lifecycle Flow

```text
Issue #205
    ↓
docs/205-standardize-readme
    ↓
PR #210 (docs: standardize repository README | Closes #205)
    ↓
review
    ↓
merge into master
    ↓
Issue #205 automatically closed
    ↓
Project → Done
```

### Quick Reference Summary

| Stage                 | Convention / Example                                                   |
| :-------------------- | :--------------------------------------------------------------------- |
| **1. Issue**          | `#205` — `[DOCS] Standardize README`                                   |
| **2. Branch**         | `docs/205-standardize-readme`                                          |
| **3. Commit**         | `docs: standardize repository README`                                  |
| **4. Pull Request**   | `PR #210` — `docs: standardize repository README` (with `Closes #205`) |
| **5. Review & Merge** | Team review → Merged into `master`                                     |
| **6. Result**         | Issue `#205` closed automatically → Card moved to **Project → Done**   |
