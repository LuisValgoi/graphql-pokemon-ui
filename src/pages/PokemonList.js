import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Notification from '../components/Notification/Notification';
import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';
import Spinner from '../components/Spinner/Spinner';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

import ActionList from '../redux/Pokemon/actions/List';
import ActionNotification from '../redux/ViewSettings/actions/Notification';

const PokemonList = () => {
  const deletion = useSelector(state => state.pokemon.list.deletion);
  const pokemons = useSelector(state => state.pokemon.list.items);
  const notification = useSelector(state => state.viewSettings.notification);
  const [onPokemonsLoad] = useActions([(query) => ActionList.ON_ITEMS_LOAD_REQUEST(query)], []);
  const [onShowNotification] = useActions([() => ActionNotification.ON_SHOW_NOTIFICATION()], []);
  const [onCloseErrorLoadNotification] = useActions([() => ActionList.ON_CLOSE_ERROR_LOAD_NOTIFICATION()], []);
  const [onCloseForeverNotification] = useActions([() => ActionNotification.ON_CLOSE_FOREVER_NOTIFICATION()], []);
  const [onShowDeletionModal] = useActions([(item) => ActionList.ON_DELETION_SHOW_MODAL(item)], []);
  const [onProceedDeletion] = useActions([() => ActionList.ON_DELETION_PROCEED()], []);
  const [onCloseDeletionModal] = useActions([() => ActionList.ON_DELETION_CLOSE_MODAL()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  useEffect(() => {
    if (!notification.isClosedForever) {
      onShowNotification();
    }
  }, [notification.isClosedForever, onShowNotification, pokemons.hasFailed]);

  return (
    <>
      {pokemons.hasFailed && (
        <Notification title='Error' variant='danger' message='It seems that we had an error at the load' onClose={onCloseErrorLoadNotification} />
      )}

      {notification.isShown && !notification.isClosedForever && !pokemons.hasFailed && (
        <Notification title='Warning' variant='info' message='Remember that this is a mockserver data' onClose={onCloseForeverNotification} />
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
