import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { map, values } from 'ramda';
import routes, { defaultRoute } from '../../routes';
import Header from './header';
import Events from '../../pages/Events';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          {map(
            ({ exact, path, component }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={component}
              />
            ),
            values(routes),
          )}
          <Route path="/" component={defaultRoute.component} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
