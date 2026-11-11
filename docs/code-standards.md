# Code Standards & Linting Guide — Pauliceia 2.0

This document describes the tools, conventions, and commands used to maintain code quality, consistency, and readability in the **Pauliceia 2.0** project.

---

## 🛠️ Tools Used

The project relies on three complementary standardization layers:

1. **EditorConfig (`.editorconfig`):** Enforces basic indentation, line ending, and charset rules directly inside the developer's editor.
2. **Prettier:** Handles automatic code formatting and style rules (spacing, quotes, semicolons).
3. **ESLint 9 (`eslint.config.js`):** Handles static code analysis, JavaScript best practices, and essential Vue 2 component rules (`flat/vue2-essential`).

---

## 📋 Available Commands

All verification and autofix commands are executed from the repository root via NPM:

| Command                 | Description                                                            | Tool     |
| :---------------------- | :--------------------------------------------------------------------- | :------- |
| `npm run lint`          | Runs full formatting and linting fixes (Prettier + ESLint in sequence) | Both     |
| `npm run lint:prettier` | Automatically formats project files according to style rules           | Prettier |
| `npm run lint:eslint`   | Analyzes and autofixes syntax and best-practice issues                 | ESLint   |

> **Note:** Before opening a Pull Request, make sure to run `npm run lint` so that no formatting or lint violations are introduced.

---

## 📏 Adopted Rules

### 1. Global Editor Settings (`.editorconfig`)

- **Indentation:** 2 spaces (`indent_size = 2`, `indent_style = space`).
- **Charset:** UTF-8 (`charset = utf-8`).
- **End of line:** Unix-style LF (`end_of_line = lf`).
- **Trailing whitespace:** Automatically trimmed (`trim_trailing_whitespace = true`).
- **Final newline:** Files must always end with a blank newline (`insert_final_newline = true`).

### 2. JavaScript & Vue Rules (`eslint.config.js`)

- **Vue 2 Essential:** Core rules from `eslint-plugin-vue` to prevent common pitfalls in Vue 2 component lifecycles.
- **Component names:** `vue/multi-word-component-names` is disabled (`off`) to maintain compatibility with existing single-word components.
- **Unused variables (`no-unused-vars`):** Strict error, with exceptions allowed for common utility parameters prefixed with `_`, `event`, `response`, or `val`.

---

## 💻 Editor Integration (VS Code)

To automatically format and fix files on save in Visual Studio Code, install the following extensions:

- **EditorConfig for VS Code** (`EditorConfig.EditorConfig`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)

### Suggested `.vscode/settings.json` configuration:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
