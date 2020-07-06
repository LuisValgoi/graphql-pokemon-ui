## Overview

GraphQL Pokemon User Interface

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/9073c094-1280-4115-a4c4-47d8417dfbdd/deploy-status)](https://app.netlify.com/sites/graphql-pokemon-ui-valgoi/deploys)

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

## Dependencies

- `axios`: To trigger HTTP requests.
- `react-bootstrap`: UI Lib for React.
- `json-server`: The mock server.
- `react-redux`: State container.
- `redux-actions`: Better way to trigger actions w/ redux-saga.
- `redux-saga`: Mess with the components side-effects.
- `react-router-dom`: Routing.
