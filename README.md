## Overview

GraphQL Pokemon User Interface

## Status

[![LuisValgoi](https://circleci.com/gh/LuisValgoi/graphql-pokemon-ui.svg?style=svg)](https://app.circleci.com/pipelines/github/LuisValgoi/graphql-pokemon-ui)

## Backend

https://github.com/LuisValgoi/graphql-pokemon-server

## How to Run

```
yarn
yarn mock or yarn start
```

## Available Scripts

`yarn mock`: Runs the app @ [:3000](http://localhost:3000) w/ the mockserver @ [:3001](http://localhost:3001) in background.

`yarn start`: Runs the app @ [:3000](http://localhost:3000) w/ the server @ [:9000](http://localhost:9000) in background.

`yarn test`: Executes the tests of the app ([RTL](https://testing-library.com/) + [JEST](https://jestjs.io/)).

`yarn test:ci`: Executes the `yarn test` w/a prompting you anything.

`yarn test:coverage`: Executes the `yanr test:ci` and generates the `lcov` dir report by [Instanbul](https://istanbul.js.org/).

## Dependencies

- `axios`: To trigger HTTP requests.
- `react-bootstrap`: UI Lib for React.
- `json-server`: The mock server.
- `react-redux`: State container.
- `redux-actions`: Better way to trigger actions w/ redux-saga.
- `redux-saga`: Mess with the components side-effects.
- `react-router-dom`: Routing.
- `yup` + `formik`: Form & Validation.
- `lodash`: Utility lib.
- `husky`: pre-commit validator.
