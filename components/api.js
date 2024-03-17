import { checkResponse } from '../utils/utils';

const config = {
  baseURL: 'https://api.rawg.io/api/',
  headers: {
    key: '?key=f35c3a30d54e474cb0bf6f725ad38c6f',
  },
};

function request(endpoint, id) {
  const url = `${config.baseURL}${endpoint}${id}${config.headers.key}`;
  return fetch(url).then(checkResponse);
}

export const getGameByIdRequest = (id) => {
  return request('games/', id);
};

export const getScreenshotsByIdRequest = (id) => {
  return request(`games/${id}/screenshots`, '');
};
