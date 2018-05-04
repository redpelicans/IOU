import { requestJson } from './utils';

export const LOAD_PEOPLE = 'people:load';
export const loadPeople = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/people',
  })
    .then(data => dispatch(peopleLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => console.log('people:load ERROR'));
  /* eslint-enable no-console */
};

export const PEOPLE_LOADED = 'people:loaded';
export const peopleLoaded = people => ({
  type: PEOPLE_LOADED,
  payload: { people },
});
