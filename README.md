# pauliceia front-end

Pauliceia 2.0 project front-end.


## Dependencies

Requires:

- Node: v8.17.0
- NPM: >=6.13.4 <=6.14.8

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
