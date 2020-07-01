import React from 'react';
import { Route, Switch } from "react-router-dom";
import BrowserURL from '../util/BrowserURL';

import Main from '../pages/Main';
import PokemonView from '../pages/PokemonView';
import PokemonEdit from '../pages/PokemonEdit';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path={BrowserURL.HOME} exact component={Main} />
      <Route path={BrowserURL.VIEW} exact component={PokemonView} />
      <Route path={BrowserURL.EDIT} exact component={PokemonEdit} />
      <Route path={BrowserURL.ANY} component={NotFound} />
    </Switch>
  );
};

export default Routes;
