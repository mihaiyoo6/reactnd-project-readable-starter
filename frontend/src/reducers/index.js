import { combineReducers } from 'redux';
import categoryReducer from './categories';
import postReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
  categories: categoryReducer,
  posts: postReducer,
  comments: commentsReducer
});