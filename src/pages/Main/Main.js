import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

import ActionMain from './actions/Main';

import Toolbar from '../../components/Toolbar/Toolbar';
import CardList from '../../components/CardList/CardList';

const App = () => {
  const pokemons = useSelector(state => state.main.pokemons);
  const [onPokemonsLoad] = useActions([(params) => ActionMain.ON_POKEMON_LOAD_REQUEST(params)], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      <Toolbar />
      <CardList items={pokemons} onLoadScroll={() => onPokemonsLoad({ url: 'test' })} />
    </>
  );
}

export default App;
