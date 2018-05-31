import { createSelector } from 'reselect';
import { find, propEq, map } from 'ramda';
import { getEvent } from './events';

export const getPeople = state => state.people.people;

export const getPerson = (id, people) => find(propEq('id', id), people);

export const getSelectPeople = createSelector([getPeople], people =>
  map(
    ({ id, firstname, lastname }) => ({
      id,
      name: `${firstname} ${lastname}`,
    }),
    people,
  ),
);

export const getAttendees = id =>
  createSelector([getEvent(id), getPeople], (event, people) => {
    if (event && people)
      return map(id => find(propEq('id', id), people), event.attendeeIds);
  });
