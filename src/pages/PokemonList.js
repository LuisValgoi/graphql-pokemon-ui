import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Notification from '../components/Notification/Notification';
import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';
import Spinner from '../components/Spinner/Spinner';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

import ActionList from '../redux/Pokemon/actions/List';

const PokemonList = () => {
  const deletion = useSelector(state => state.pokemon.list.deletion);
  const pokemons = useSelector(state => state.pokemon.list.items);
  const [onPokemonsLoad] = useActions([(query) => ActionList.ON_ITEMS_LOAD_REQUEST(query)], []);
  const [onCloseNotification] = useActions([() => ActionList.ON_CLOSE_FAIL_NOTIFICATION()], []);
  const [onShowDeletionModal] = useActions([(item) => ActionList.ON_DELETION_SHOW_MODAL(item)], []);
  const [onProceedDeletion] = useActions([() => ActionList.ON_DELETION_PROCEED()], []);
  const [onCloseDeletionModal] = useActions([() => ActionList.ON_DELETION_CLOSE_MODAL()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      {pokemons.hasFailed && (
        <Notification title='Error' message='It seems that we had an error during the load' onClose={onCloseNotification} />
      )}

      {deletion.modalShown && (
        <ConfirmationModal title='Warning' body='Do you want to delete this item?' onClose={onCloseDeletionModal} onProceed={onProceedDeletion} />
      )}

      <Toolbar onSearch={(query) => onPokemonsLoad(query)} />
      <CardList items={pokemons.data} onShowDeleteModel={onShowDeletionModal} />
      {pokemons.isLoading && (
        <Spinner />
      )}
    </>
  );
};

export default PokemonList;
