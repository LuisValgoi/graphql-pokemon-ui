import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import ActionDetail from '../redux/Pokemon/actions/Detail';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);
  }, [match.params.id]);

  return (
    <div>{pokemon.data.id}</div>
  );
}

export default PokemonDetail;
