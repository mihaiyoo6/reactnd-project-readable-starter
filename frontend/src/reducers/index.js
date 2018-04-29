import { combineReducers } from 'redux';
import categoryReducer from './categories';
import postReducer from './posts';

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer
});