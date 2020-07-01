import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Container from 'react-bootstrap/Container';

import Notification from '../components/Notification/Notification';
import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';
import Spinner from '../components/Spinner/Spinner';

import ActionMain from '../redux/Main/actions/Main';
import ActionMainNotification from '../redux/Main/actions/MainNotification';
import ActionMainDeleteModal from '../redux/Main/actions/MainDeleteModal';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

const App = () => {
  const data = useSelector(state => state.main.data);
  const notification = useSelector(state => state.main.notification);
  const deleteModal = useSelector(state => state.main.delete);
  const [onPokemonsLoad] = useActions([(scrolled) => ActionMain.ON_POKEMON_LOAD_REQUEST(scrolled)], []);
  const [onSetSelectedItem] = useActions([(object) => ActionMain.ON_SET_SELECTED_ITEM(object)], []);
  const [onSetScrollAmount] = useActions([(value) => ActionMain.ON_SET_SCROLL_AMOUNT_LIST(value)], []);
  const [onCloseLoadLimitNotification] = useActions([() => ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY(false)], []);
  const [onShowDeleteModal] = useActions([() => ActionMainDeleteModal.ON_MAIN_SHOW_DELETE_MODAL()], []);
  const [onCloseDeleteModal] = useActions([() => ActionMainDeleteModal.ON_MAIN_CLOSE_DELETE_MODAL()], []);
  const [onProceedDeletion] = useActions([() => ActionMainDeleteModal.ON_MAIN_DELETE_PROCEED()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      {notification.shown && (
        <Notification title={notification.title} message={notification.message} onClose={() => onCloseLoadLimitNotification()} />
      )}

      {deleteModal.shown && (
        <ConfirmationModal onClose={onCloseDeleteModal} onProceed={onProceedDeletion} title={deleteModal.title} body={deleteModal.body} />
      )}

      <Toolbar amountSelected={data.scrollAmount} onScrollAmountSelect={onSetScrollAmount} />
      <Container>
        <CardList items={data.pokemons} onSetSelectedItem={onSetSelectedItem} onShowDeleteModel={onShowDeleteModal} onLoadScroll={() => onPokemonsLoad()} />
        {data.isLoading && (
          <Spinner />
        )}
      </Container>
    </>
  );
};

export default App;
