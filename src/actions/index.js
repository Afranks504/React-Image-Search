import axios from 'axios';

const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_HISTORY = 'FETCH_HISTORY';

export function fetchImages(payload) {
  console.log('PAYLOAD: ', payload);
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
