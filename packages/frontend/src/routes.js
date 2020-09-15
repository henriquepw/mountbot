import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import WithFloat from './pages/WithFloat';

function Routes() {
  return (
    <Switch>
      <Route path="/float-button">
        <WithFloat />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
