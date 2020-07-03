## Overview

GraphQL Pokemon User Interface

## How to Run

```
yarn
yarn mock
```

## Available Scripts

### `yarn mock`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser w/ the [:3001](http://localhost:3001) in background w/ the mockserver

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
