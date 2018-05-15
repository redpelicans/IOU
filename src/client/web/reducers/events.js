import { append } from 'ramda';

import { EVENTS_LOADED, EVENT_ADDED } from '../actions/events';

const initialState = {
  events: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADED:
      return { ...state, events: action.payload.events };
    case EVENT_ADDED:
      return { ...state, events: append(action.payload.event, state.events) };
    default: {
      return state;
    }
  }
};

export default events;
