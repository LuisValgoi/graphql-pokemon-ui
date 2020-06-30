import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import store from '../redux/store';
import Main from '../pages/Main/Main'
import Pokemon from '../pages/Pokemon'

const Routes = () => {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <Route path="/" exact component={Main} />
        <Route path="/pokemon/:id" component={Pokemon} />
      </Provider>
    </BrowserRouter>
  );
}

export default Routes;
