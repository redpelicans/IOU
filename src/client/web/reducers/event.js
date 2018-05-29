import { SPENDINGS_LOADED } from '../actions/event';

const initialState = {
  eventId: '',
  spendings: [],
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case SPENDINGS_LOADED:
      return { ...state, spendings: action.payload.spendings };
    default: {
      return state;
    }
  }
};

export default event;
