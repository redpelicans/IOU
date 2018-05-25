import { find, prop, values } from 'ramda';
import Events from './pages/Events';
import View from './components/Event/View';

const routes = {
  about: {
    exact: true,
    path: '/about',
    component: View,
  },
  events: {
    exact: true,
    path: '/events',
    component: Events,
    default: true,
  },
};

export const defaultRoute = find(prop('default'), values(routes));

export default routes;
