import { createSelector } from 'reselect';
import { find, propEq } from 'ramda';

export const getEvents = state => state.events.events;

export const getEvent = id =>
  createSelector([getEvents], events => find(propEq('id', id), events));
