## Overview

GraphQL Pokemon User Interface

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/9073c094-1280-4115-a4c4-47d8417dfbdd/deploy-status)](https://app.netlify.com/sites/graphql-pokemon-ui-valgoi/deploys)

## Backend

https://github.com/LuisValgoi/graphql-pokemon-server

## How to Run

```
yarn
yarn mock
yarn start
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

## Server

The data was extracted from [graphql-pokemon.now.sh](https://graphql-pokemon.now.sh/)

## Query Example

The following query gets the 50 first records @ database

```graphql
{
  pokemons(first: 50) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    resistant
    weaknesses
    fleeRate
    maxCP
    evolutionRequirements {
      amount
      name
    }
    maxHP
    image
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
```
