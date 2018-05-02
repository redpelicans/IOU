import axios from 'axios';

export const LOAD_PEOPLE = 'people:load';
export const loadPeople = () => dispatch => {
  axios
    .get('http://localhost:8181/api/people')
    .then(({ data }) => dispatch(peopleLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => console.log('people:load ERROR'));
  /* eslint-enable no-console */
};

export const PEOPLE_LOADED = 'people:loaded';
export const peopleLoaded = people => ({
  type: PEOPLE_LOADED,
  payload: { people },
});
