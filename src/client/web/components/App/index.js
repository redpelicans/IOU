import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { map, values } from 'ramda';
import routes from '../../routes';
import Header from './header';
import Events from '../Events';

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
        </Switch>
      </div>
    </div>
  );
};

export default App;
