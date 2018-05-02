import { combineReducers } from 'redux';
import events from './events';
import people from './people';

const reducer = combineReducers({
  events,
  people,
});

export default reducer;
