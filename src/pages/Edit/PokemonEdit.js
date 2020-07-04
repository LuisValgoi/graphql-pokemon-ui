import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

import Spinner from '../../components/Spinner/Spinner';
import PokemonForm from './PokemonForm';

import BrowserURL from '../../util/BrowserURL';
import ActionEdit from '../../redux/Pokemon/actions/Edit';
import { hasData } from '../../util/Verficator';

const PokemonEdit = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.edit.item);

  const [onPokemonLoad] = useActions([(id) => ActionEdit.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionEdit.ON_ITEM_RESET()], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);

    return () => onPokemonReset();
  }, [match.params.id, onPokemonLoad, onPokemonReset]);

  const getPokemonEdit = useCallback(() => {
    if (pokemon && hasData(pokemon.data)) {
      return <PokemonForm data={pokemon.data} />

    } else if (pokemon && pokemon.hasFailed) {
      return <Redirect to={BrowserURL.NOT_FOUND} />

    } else {
      return <Spinner />
    }
  }, [pokemon]);

  return getPokemonEdit();
}

export default PokemonEdit;
