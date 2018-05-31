import { combineReducers } from 'redux';
import spendings from './spendings';
import events from './events';
import people from './people';

const reducer = combineReducers({
  spendings,
  events,
  people,
});

export default reducer;
