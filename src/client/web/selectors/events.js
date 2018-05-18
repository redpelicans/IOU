import { find, propEq } from 'ramda';

export const getEvents = state => state.events.events;

export const getEvent = (id, events) => find(propEq('id', id))(events);
