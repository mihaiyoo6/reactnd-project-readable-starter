import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_BEGIN_SINGLE,
  FETCH_POSTS_SUCCESS_SINGLE,
  FETCH_POSTS_FAILURE_SINGLE
} from '../actions/posts';

const initialState = {
  items: [],
  loading: false,
  error: null
};


export default function postsReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_POSTS_BEGIN:
    case FETCH_POSTS_BEGIN_SINGLE:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.posts
      }

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    case FETCH_POSTS_SUCCESS_SINGLE:
      return {
        ...state,
        loading: false,
        error: null,
        item: action.payload.post
      }

    case FETCH_POSTS_FAILURE_SINGLE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {}
      }

    default:
      return state;
  }
}
