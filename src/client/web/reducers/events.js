import { append, findIndex, update, propEq, remove } from 'ramda';

import {
  EVENTS_LOADED,
  EVENT_ADDED,
  EVENT_UPDATED,
  EVENT_DELETED,
} from '../actions/events';

const initialState = {
  events: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADED:
      return { ...state, events: action.payload.events };
    case EVENT_ADDED:
      return { ...state, events: append(action.payload.event, state.events) };
    case EVENT_UPDATED:
      return {
        ...state,
        events: update(
          findIndex(propEq('id', action.payload.event.id), state.events),
          action.payload.event,
          state.events,
        ),
      };
    case EVENT_DELETED:
      return {
        ...state,
        events: remove(
          findIndex(propEq('id', action.payload.id), state.events),
          1,
          state.events,
        ),
      };
    default: {
      return state;
    }
  }
};

export default events;
