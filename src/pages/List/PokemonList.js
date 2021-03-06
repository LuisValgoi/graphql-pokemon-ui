import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

import ConfirmationModal from '../../components/Modal/ConfirmationModal';
import Notification from '../../components/Notification/Notification';
import Toolbar from '../../components/Toolbar/Toolbar';
import CardList from '../../components/CardList/CardList';
import Spinner from '../../components/Spinner/Spinner';

import ActionList from '../../redux/Pokemon/actions/List';
import ActionDetail from '../../redux/Pokemon/actions/Detail';
import ActionPersistence from '../../redux/Pokemon/actions/Persistence';
import ActionModal from '../../redux/ViewSettings/actions/Modal';
import ActionNotification from '../../redux/ViewSettings/actions/Notification';

const PokemonList = () => {
  const modal = useSelector(state => state.viewSettings.modal);
  const notification = useSelector(state => state.viewSettings.notification);
  const pokemons = useSelector(state => state.pokemon.list.items);

  const [onPokemonsLoad] = useActions([(query) => ActionList.ON_ITEMS_LOAD_REQUEST(query)], []);
  const [onPokemonsLoadErrorClose] = useActions([() => ActionList.ON_ITEMS_LOAD_FAIL_RESET()], []);

  const [onNotificationShow] = useActions([() => ActionNotification.ON_NOTIFICATION_SHOW()], []);
  const [onNotificationCloseForever] = useActions([() => ActionNotification.ON_NOTIFICATION_CLOSE_FOREVER()], []);

  const [onShowModal] = useActions([() => ActionModal.ON_SHOW_MODAL()], []);
  const [onCloseModal] = useActions([() => ActionModal.ON_CLOSE_MODAL()], []);

  const [onPokemonSet] = useActions([(item) => ActionDetail.ON_ITEM_SET(item)], []);
  const [onPokemonDelete] = useActions([() => ActionPersistence.ON_ITEM_DELETE()], []);

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
        <Notification title='Information' variant='info' message='Keep in mind we are storing data at the Browser Local Storage' onClose={onNotificationCloseForever} />
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
