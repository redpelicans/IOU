import { filter, find, propEq } from 'ramda';

export const getSpendings = eventId => state =>
  filter(propEq('eventId', eventId), state.spendings.spendings);

export const getSpending = (id, spendings) => find(propEq('id', id), spendings);
