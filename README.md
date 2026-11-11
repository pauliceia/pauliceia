# pauliceia front-end

Pauliceia 2.0 project front-end.

## Dependencies

Requires:

- Node: >=22.6.0
- NPM: >=10.8.2

You can install the above versions globally on your machine or through [NVM](https://github.com/nvm-sh/nvm).

## Install

Create the `config/prod.env.js` file and install the dependencies:

```
$ cp config/prod.env.js.EXAMPLE config/prod.env.js
$ npm i
```

## Run

Run locally with hot reload by using one of the following commands:

```
$ npm start
$ npm run dev
```

Now you can access: http://localhost:8080

Or build for production with minification:

```
$ npm run build
```

Or build for production and view the bundle analyzer report

```
$ npm run build --report
```

## Code Quality & Standards

The project uses **ESLint 9**, **Prettier**, and **EditorConfig** to ensure code consistency.

Run automatic formatting and validation with:

```bash
# Format with Prettier and fix with ESLint
$ npm run lint

# Or individually:
$ npm run lint:prettier
$ npm run lint:eslint
```

For more details on rules and editor setup, see the [Code Standards Guide](docs/code-standards.md).

## Contributing

See the centralized [Contributing Guide (`CONTRIBUTING.md`)](https://github.com/pauliceia/issues/blob/master/CONTRIBUTING.md) in `pauliceia/issues` for details on our development workflow and naming conventions for issues, branches, Pull Requests, and commits.
