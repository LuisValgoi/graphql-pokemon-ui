## Overview

GraphQL Pokemon User Interface

##  Status of CI/CD
[![LuisValgoi](https://circleci.com/gh/LuisValgoi/graphql-pokemon-ui.svg?style=shield)](https://app.circleci.com/pipelines/github/LuisValgoi/graphql-pokemon-ui)
[![Coverage Status](https://coveralls.io/repos/github/LuisValgoi/graphql-pokemon-ui/badge.svg?branch=master)](https://coveralls.io/github/LuisValgoi/graphql-pokemon-ui?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9073c094-1280-4115-a4c4-47d8417dfbdd/deploy-status)](https://app.netlify.com/sites/graphql-pokemon-ui/deploys)

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

`yarn test:coverage`: Executes the `yanr test` and generates the `./coverage` folder reported by [jest](https://www.google.com/search?q=jest+lcov&oq=jest+lcov&aqs=chrome..69i57j0l7.1238j0j7&sourceid=chrome&ie=UTF-8).

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
