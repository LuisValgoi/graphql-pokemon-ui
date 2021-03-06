import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

import NotFound from '../NotFound';
import Button from 'react-bootstrap/Button';
import Spinner from '../../components/Spinner/Spinner';
import PokemonForm from './PokemonForm';

import URLProvider from '../../util/URLProvider';
import BrowserURL from '../../util/BrowserURL';
import { hasData } from '../../util/Payload';

import ActionEdit from '../../redux/Pokemon/actions/Edit';
import ActionPersistence from '../../redux/Pokemon/actions/Persistence';
import GoBack from '../../components/GoBack/GoBack';

const PokemonEdit = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.edit.item);
  const save = useSelector(state => state.pokemon.persistence.save);

  const [onPokemonLoad] = useActions([(id) => ActionEdit.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionEdit.ON_ITEM_RESET()], []);

  const [onPokemonSave] = useActions([(item) => ActionPersistence.ON_ITEM_SAVE(item)], []);
  const [onPersistenceReset] = useActions([() => ActionPersistence.ON_PERSISTENCE_RESET()], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);

    return () => { onPokemonReset(); onPersistenceReset(); };
  }, [match.params.id, onPokemonLoad, onPokemonReset, onPersistenceReset]);

  const getPokemonEdit = useCallback(() => {
    if (save.isLoading) {
      return <Spinner />

    } else if (pokemon && hasData(pokemon.data)) {
      return (
        <PokemonForm data={pokemon.data} onSubmit={values => onPokemonSave(values)}>
          <GoBack text='Cancel' />
          <Button type="submit" variant='primary' disabled={false}>Save</Button>
        </PokemonForm >
      );

    } else if (pokemon && pokemon.hasFailed) {
      return <NotFound />

    } else {
      return <Spinner />
    }
  }, [onPokemonSave, pokemon, save.isLoading]);

  return save.hasSucced ? <Redirect to={URLProvider.replace(BrowserURL.DETAIL, pokemon.data.id)} /> : getPokemonEdit();
};

export default PokemonEdit;
