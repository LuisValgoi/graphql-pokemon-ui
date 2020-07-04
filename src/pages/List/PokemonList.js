import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

import Notification from '../../components/Notification/Notification';
import Toolbar from '../../components/Toolbar/Toolbar';
import CardList from '../../components/CardList/CardList';
import Spinner from '../../components/Spinner/Spinner';
import ConfirmationModal from '../../components/Modal/ConfirmationModal';

import ActionList from '../../redux/Pokemon/actions/List';
import ActionDetail from '../../redux/Pokemon/actions/Detail';
import ActionModal from '../../redux/ViewSettings/actions/Modal';
import ActionNotification from '../../redux/ViewSettings/actions/Notification';

const PokemonList = () => {
  const modal = useSelector(state => state.viewSettings.modal);
  const notification = useSelector(state => state.viewSettings.notification);
  const pokemons = useSelector(state => state.pokemon.list.items);

  const [onPokemonsLoad] = useActions([(query) => ActionList.ON_ITEMS_LOAD_REQUEST(query)], []);
  const [onPokemonsLoadErrorClose] = useActions([() => ActionList.ON_CLOSE_ERROR_LOAD_NOTIFICATION()], []);

  const [onPokemonSet] = useActions([(item) => ActionDetail.ON_ITEM_SET(item)], []);
  const [onPokemonDelete] = useActions([() => ActionDetail.ON_ITEM_DELETE()], []);

  const [onNotificationShow] = useActions([() => ActionNotification.ON_NOTIFICATION_SHOW()], []);
  const [onNotificationCloseForever] = useActions([() => ActionNotification.ON_NOTIFICATION_CLOSE_FOREVER()], []);

  const [onShowModal] = useActions([() => ActionModal.ON_SHOW_MODAL()], []);
  const [onCloseModal] = useActions([() => ActionModal.ON_CLOSE_MODAL()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  useEffect(() => {
    if (!notification.isClosedForever) {
      onNotificationShow();
    }
  }, [onNotificationShow, notification.isClosedForever]);

  const _onShowDeletionModal = (item) => {
    onPokemonSet(item);
    onShowModal();
  };

  return (
    <>
      {pokemons.hasFailed && (
        <Notification title='Error' variant='danger' message='It seems that we had an error at the load' onClose={onPokemonsLoadErrorClose} />
      )}

      {notification.isShown && !notification.isClosedForever && !pokemons.hasFailed && (
        <Notification title='Information' variant='info' message='Keep in mind this is a mockserver data' onClose={onNotificationCloseForever} />
      )}

      {modal.shown && (
        <ConfirmationModal title='Warning' body='Do you want to delete this item?' onClose={onCloseModal} onProceed={onPokemonDelete} />
      )}

      <Toolbar onSearch={(query) => onPokemonsLoad(query)} />
      <CardList items={pokemons.data} onShowDeleteModal={_onShowDeletionModal} />

      {pokemons.isLoading && (
        <Spinner />
      )}
    </>
  );
};

export default PokemonList;
