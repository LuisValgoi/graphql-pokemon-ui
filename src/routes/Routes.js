import React from 'react';
import { Route, Switch } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import PokemonList from '../pages/PokemonList';
import PokemonDetail from '../pages/PokemonDetail';
import PokemonEdit from '../pages/PokemonEdit';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path={BrowserURL.HOME} exact component={PokemonList} />
      <Route path={BrowserURL.DETAIL} component={PokemonDetail} />
      <Route path={BrowserURL.EDIT} component={PokemonEdit} />
      <Route path={BrowserURL.NOT_FOUND} exact component={NotFound} />
      <Route path={BrowserURL.ANY} component={NotFound} />
    </Switch>
  );
};

export default Routes;
