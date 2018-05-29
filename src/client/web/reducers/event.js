import { append, findIndex, update, propEq, remove } from 'ramda';

import {
  SPENDINGS_LOADED,
  SPENDING_ADDED,
  SPENDING_UPDATED,
  SPENDING_DELETED,
} from '../actions/event';

const initialState = {
  spendings: [],
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case SPENDINGS_LOADED:
      return { ...state, spendings: action.payload.spendings };
    case SPENDING_ADDED:
      return {
        ...state,
        spendings: append(action.payload.spending, state.spendings),
      };
    case SPENDING_UPDATED:
      return {
        ...state,
        spendings: update(
          findIndex(propEq('id', action.payload.spending.id), state.spendings),
          action.payload.spending,
          state.spendings,
        ),
      };
    case SPENDING_DELETED:
      return {
        ...state,
        spendings: remove(
          findIndex(propEq('id', action.payload.id), state.spendings),
          1,
          state.spendings,
        ),
      };
    default: {
      return state;
    }
  }
};

export default event;
