import { requestJson } from './utils';

export const LOAD_EVENTS = 'events:load';
export const loadEvents = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/events',
  })
    .then(data => dispatch(eventsLoaded(data)))
    .catch(() => alert('events:load ERROR'));
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
    .catch(() => alert('events:add ERROR'));
};

export const EVENT_ADDED = 'events:added';
export const eventAdded = event => ({
  type: EVENT_ADDED,
  payload: { event },
});

export const UPDATE_EVENT = 'event:update';
export const updateEvent = data => dispatch => {
  requestJson({
    method: 'PATCH',
    url: `/api/events/${data.id}`,
    body: data,
  })
    .then(data => dispatch(eventUpdated(data)))
    .catch(() => alert('events:update ERROR'));
};

export const EVENT_UPDATED = 'event:updated';
export const eventUpdated = event => ({
  type: EVENT_UPDATED,
  payload: { event },
});

export const DELETE_EVENT = 'event:deleted';
export const deleteEvent = id => dispatch => {
  requestJson({
    method: 'DELETE',
    url: `/api/events/${id}`,
  })
    .then(data => dispatch(eventDeleted(data)))
    .catch(() => alert('events:delete ERROR'));
};

export const EVENT_DELETED = 'event:deleted';
export const eventDeleted = ({ id }) => ({
  type: EVENT_DELETED,
  payload: { id },
});
