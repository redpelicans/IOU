import { find, prop, values } from 'ramda';
import Events from './pages/Events';
import Event from './pages/Event';

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
  event: {
    exact: true,
    path: '/event/:id',
    component: Event,
  },
};

export const defaultRoute = find(prop('default'), values(routes));

export default routes;
