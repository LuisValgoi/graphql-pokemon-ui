import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

import Spinner from '../../components/Spinner/Spinner';
import PokemonForm from './PokemonForm';

import BrowserURL from '../../util/BrowserURL';
import ActionDetail from '../../redux/Pokemon/actions/Detail';
import { hasData } from '../../util/Verficator';

const PokemonEdit = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);

  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionDetail.ON_ITEM_RESET()], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);

    return () => onPokemonReset();
  }, [match.params.id, onPokemonLoad, onPokemonReset]);

  const getPokemonEdit = useCallback(() => {
    if (hasData(pokemon.data)) {
      return <PokemonForm data={pokemon.data} />

    } else if (pokemon.hasFailed) {
      return <Redirect to={BrowserURL.NOT_FOUND} />

    } else {
      return <Spinner />
    }
  }, [pokemon.data, pokemon.hasFailed]);

  return getPokemonEdit();
}

export default PokemonEdit;
