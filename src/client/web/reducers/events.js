import { EVENTS_LOADED } from '../actions/events';

const initialState = {
  events: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADED:
      return { ...state, events: action.payload.events };
    default: {
      return state;
    }
  }
};

export default events;
