import { find, prop, values } from 'ramda';
import Events from './components/Events';

const routes = {
  about: {
    exact: true,
    path: '/about',
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
