import { createSelector } from 'reselect';
import { find, propEq, map } from 'ramda';

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
