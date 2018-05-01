import axios from 'axios';

export const LOAD_EVENTS = 'events:load';
export const loadEvents = () => dispatch => {
  axios
    .get('http://localhost:8181/api/events')
    .then(({ data }) => dispatch(eventsLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => console.log('events:load ERROR'));
  /* eslint-enable no-console */
};

export const EVENTS_LOADED = 'events:loaded';
export const eventsLoaded = events => ({
  type: EVENTS_LOADED,
  payload: { events },
});
