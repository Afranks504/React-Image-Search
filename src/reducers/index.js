import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';
import HistoryReducer from './history_reducer';

const rootReducer = combineReducers({
  images: ImageReducer,
  history: HistoryReducer
});

export default rootReducer;
