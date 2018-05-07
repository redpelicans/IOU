import { PEOPLE_LOADED } from '../actions/people';

const initialState = {
  people: [],
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_LOADED:
      return { ...state, people: action.payload.people };
    default: {
      return state;
    }
  }
};

export default people;
