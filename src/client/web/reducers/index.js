import { combineReducers } from 'redux';
import event from './event';
import events from './events';
import people from './people';

const reducer = combineReducers({
  event,
  events,
  people,
});

export default reducer;
