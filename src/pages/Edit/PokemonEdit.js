import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

import Button from 'react-bootstrap/Button';
import Spinner from '../../components/Spinner/Spinner';
import PokemonForm from './PokemonForm';

import BrowserURL from '../../util/BrowserURL';
import { hasData } from '../../util/Verficator';

import ActionEdit from '../../redux/Pokemon/actions/Edit';

const PokemonEdit = ({ match }) => {
  const history = useHistory();
  const pokemon = useSelector(state => state.pokemon.edit.item);

  const [onPokemonLoad] = useActions([(id) => ActionEdit.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionEdit.ON_ITEM_RESET()], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);

    return () => onPokemonReset();
  }, [match.params.id, onPokemonLoad, onPokemonReset]);

  const getContent = () => {
    return (
      <PokemonForm data={pokemon.data} onSubmit={(values) => alert(JSON.stringify(values))}>
        <Button onClick={() => history.goBack()} className='mr-2' variant='link' disabled={false}>Go Back</Button>
        <Button type="submit" variant='primary' disabled={false}>Save</Button>
      </PokemonForm >
    );
  };

  const getPokemonEdit = () => {
    if (pokemon && hasData(pokemon.data)) {
      return getContent();

    } else if (pokemon && pokemon.hasFailed) {
      return <Redirect to={BrowserURL.NOT_FOUND} />

    } else {
      return <Spinner />
    }
  };

  return getPokemonEdit();
}

export default PokemonEdit;
