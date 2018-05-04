import { requestJson } from './utils';

export const LOAD_EVENTS = 'events:load';
export const loadEvents = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/events',
  })
    .then(data => dispatch(eventsLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => console.log('events:load ERROR'));
  /* eslint-enable no-console */
};

export const EVENTS_LOADED = 'events:loaded';
export const eventsLoaded = events => ({
  type: EVENTS_LOADED,
  payload: { events },
});
