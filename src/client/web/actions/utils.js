import axios from 'axios';
import { prop } from 'ramda';

const [host, port] = ['localhost', 8181];

export const requestJson = ({ method, url, body, headers }) => {
  const path = `http://${host}:${port}${url}`;
  return axios({
    method: method,
    url: path,
    headers: headers,
    data: body,
  }).then(prop('data'));
};
