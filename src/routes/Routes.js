import React from 'react';
import { Route, Switch } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import PokemonList from '../pages/List/PokemonList';
import PokemonDetail from '../pages/Detail/PokemonDetail';
import PokemonEdit from '../pages/Edit/PokemonEdit';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path={BrowserURL.LIST} exact component={PokemonList} />
      <Route path={BrowserURL.DETAIL} exact component={PokemonDetail} />
      <Route path={BrowserURL.EDIT} exact component={PokemonEdit} />
      <Route path={BrowserURL.NOT_FOUND} exact component={NotFound} />
      <Route path={BrowserURL.ANY} component={NotFound} />
    </Switch>
  );
};

export default Routes;
