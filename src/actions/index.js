import axios from 'axios';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_HISTORY = 'FETCH_HISTORY';

export function fetchImages(term) {
  const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
  const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${term}`;

  const payload = axios.get(API_URL);

  return {
    type: FETCH_IMAGES,
    payload: payload
  };
}

export function fetchHistory(term) {
  return {
    type: FETCH_HISTORY,
    payload: term
  };
}
