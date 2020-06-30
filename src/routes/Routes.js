import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from '../pages/Main'
import Pokemon from '../pages/Pokemon'

const Routes = () => {
  return (
    <BrowserRouter >
      <Route path="/" exact component={Main} />
      <Route path="/pokemon/:id" component={Pokemon} />
    </BrowserRouter>
  );
}

export default Routes;
