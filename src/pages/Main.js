import React, { useState, useEffect } from 'react';

import Request from '../util/Request';
import UrlProvider from '../util/URLProvider';

import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async function loadPokemons() {
      const response = await Request.get(UrlProvider.getUrl('GET_POKEMONS'));
      setPokemons(response.data.data.query._pokemonsLEhzg);
    })();
  }, []);

  return (
    <>
      <Toolbar />
      <CardList items={pokemons} />
    </>
  );
}

export default App;
