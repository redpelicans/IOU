import { find, propEq } from 'ramda';

export const getSpendings = state => state.event.spendings;

export const getSpending = (id, spendings) => find(propEq('id', id))(spendings);
