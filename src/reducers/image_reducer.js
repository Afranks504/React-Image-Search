import { FETCH_IMAGES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_IMAGES:
    console.log('!! ', action.payload);
    return action.payload;
  }

  return state;
}
