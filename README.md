## Overview

GraphQL Pokemon User Interface

## How to Run

```
yarn
yarn mock
```

## Available Scripts

`yarn mock`: Runs the app in the development mode opening [http://localhost:3000](http://localhost:3000) w/ the [:3001](http://localhost:3001) in background pointing to the mockserver.

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
