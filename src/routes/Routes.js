import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import store from '../redux/store';

import Main from '../pages/Main'
import PokemonView from '../pages/PokemonView'
import PokemonEdit from '../pages/PokemonEdit'

const Routes = () => {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <Route path={BrowserURL.HOME} exact component={Main} />
        <Route path={BrowserURL.VIEW} exact component={PokemonView} />
        <Route path={BrowserURL.EDIT} exact component={PokemonEdit} />
      </Provider>
    </BrowserRouter>
  );
}

export default Routes;
