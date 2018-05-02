import { find, propEq } from 'ramda';

export const getPeople = state => state.people.people;

export const getPerson = (id, people) => find(propEq('id', id), people);
