import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Container from 'react-bootstrap/Container';

import Notification from '../components/Notification/Notification';
import Toolbar from '../components/Toolbar/Toolbar';
import CardList from '../components/CardList/CardList';
import Spinner from '../components/Spinner/Spinner';

import ActionMain from '../redux/Main/actions/Main';
import ConfirmationModal from '../components/Modal/ConfirmationModal';

const App = () => {
  const deletion = useSelector(state => state.main.deletion);
  const items = useSelector(state => state.main.items);
  const [onPokemonsLoad] = useActions([(query) => ActionMain.ON_ITEMS_LOAD_REQUEST(query)], []);
  const [onCloseNotification] = useActions([() => ActionMain.ON_CLOSE_FAIL_NOTIFICATION()], []);
  const [onShowDeletionModal] = useActions([(item) => ActionMain.ON_DELETION_SHOW_MODAL(item)], []);
  const [onProceedDeletion] = useActions([() => ActionMain.ON_DELETION_PROCEED()], []);
  const [onCloseDeletionModal] = useActions([() => ActionMain.ON_DELETION_CLOSE_MODAL()], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      {items.hasFailed && (
        <Notification title='Error' message='It seems that we had an error during the load' onClose={() => onCloseNotification()} />
      )}

      {deletion.modalShown && (
        <ConfirmationModal title='Warning' body='Do you want to delete this item?' onClose={onCloseDeletionModal} onProceed={onProceedDeletion} />
      )}

      <Toolbar onSearch={(query) => onPokemonsLoad(query)} />
      <Container>
        <CardList items={items.data} onShowDeleteModel={onShowDeletionModal} onLoadScroll={() => onPokemonsLoad()} />
        {items.isLoading && (
          <Spinner />
        )}
      </Container>
    </>
  );
};

export default App;
