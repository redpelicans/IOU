import Events from './components/Events';

const routes = {
  about: {
    exact: false,
    path: '/about',
  },
  events: {
    exact: false,
    path: '/',
    component: Events,
  },
};

export default routes;
