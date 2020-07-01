import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Container from 'react-bootstrap/Container';

import Notification from '../components/Notification/Notification';
import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';
import Spinner from '../components/Spinner/Spinner';

import ActionMain from '../redux/Main/actions/Main';
import ActionMainDeleteModal from '../redux/Main/actions/MainDeleteModal';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

const App = () => {
  const data = useSelector(state => state.main.data);
  const deleteModal = useSelector(state => state.main.delete);
  const [onPokemonsLoad] = useActions([(scrolled) => ActionMain.ON_POKEMON_LOAD_REQUEST(scrolled)], []);
  const [onSetSelectedItem] = useActions([(object) => ActionMain.ON_SET_SELECTED_ITEM(object)], []);
  const [onCloseNotification] = useActions([() => ActionMain.ON_CLOSE_FAIL_NOTIFICATION()], []);
  const [onShowDeleteModal] = useActions([() => ActionMainDeleteModal.ON_MAIN_SHOW_DELETE_MODAL()], []);
  const [onCloseDeleteModal] = useActions([() => ActionMainDeleteModal.ON_MAIN_CLOSE_DELETE_MODAL()], []);
  const [onProceedDeletion] = useActions([() => ActionMainDeleteModal.ON_MAIN_DELETE_PROCEED()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      {data.hasFailed && (
        <Notification title={'Error'} message={'It seems that we had an error during the load'} onClose={() => onCloseNotification()} />
      )}

      {deleteModal.shown && (
        <ConfirmationModal onClose={onCloseDeleteModal} onProceed={onProceedDeletion} title={deleteModal.title} body={deleteModal.body} />
      )}

      <Toolbar />
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
