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

const App = () => {
  const data = useSelector(state => state.main.data);
  const notification = useSelector(state => state.main.notification);
  const [onPokemonsLoad] = useActions([(scrolled) => ActionMain.ON_POKEMON_LOAD_REQUEST(scrolled)], []);
  const [onClosePokemonLoadLimitNotification] = useActions([() => ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY(false)], []);
  const [onSetScrollAmount] = useActions([(value) => ActionMain.ON_SET_SCROLL_AMOUNT_LIST(value)], []);

  useEffect(() => {
    onPokemonsLoad();
  }, [onPokemonsLoad]);

  return (
    <>
      {notification.shown && (
        <Notification title={notification.title} message={notification.message} handleClose={() => onClosePokemonLoadLimitNotification()} />
      )}

      <Toolbar amountSelected={data.scrollAmount} onScrollAmountSelect={onSetScrollAmount} />
      <Container>
        <CardList items={data.pokemons} onLoadScroll={() => onPokemonsLoad(true)} />
        {data.isLoading && (
          <Spinner />
        )}
      </Container>
    </>
  );
}

export default App;
