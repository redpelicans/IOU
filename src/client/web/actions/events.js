import { requestJson } from './utils';

export const LOAD_EVENTS = 'events:load';
export const loadEvents = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/events',
  })
    .then(data => dispatch(eventsLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => alert('events:load ERROR'));
  /* eslint-enable no-console */
};

export const EVENTS_LOADED = 'events:loaded';
export const eventsLoaded = events => ({
  type: EVENTS_LOADED,
  payload: { events },
});

export const ADD_EVENT = 'event:add';
export const addEvent = data => dispatch => {
  requestJson({
    method: 'POST',
    url: '/api/events',
    body: data,
  })
    .then(data => dispatch(eventAdded(data)))
    /* eslint-disable no-console */
    .catch(() => alert('events:add ERROR'));
  /* eslint-enable no-console */
};

export const EVENT_ADDED = 'events:added';
export const eventAdded = event => ({
  type: EVENT_ADDED,
  payload: { event },
});
