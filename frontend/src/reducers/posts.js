import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_BEGIN_SINGLE,
  FETCH_POSTS_SUCCESS_SINGLE,
  FETCH_POSTS_FAILURE_SINGLE,
  POSTS_VOTE,
  POSTS_SORT,
  POSTS_CREATE,
  POSTS_DELETE,
  POSTS_EDIT
} from '../actions/types';

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
    case POSTS_VOTE:
      return {
        ...state,
        items: state.items.map(item => item.id === action.post.id ? action.post : item),
        item: action.post
      }
    case POSTS_SORT: {
      return {
        ...state,
        items: state.items
      }
    }
    case POSTS_CREATE: {
      return {
        ...state,
        items: [...state.items, action.post]
      }
    }
    case POSTS_DELETE: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.post.id ? action.post : item),
        item: state.item ? (state.item.id === action.post.id ? action.post : {}) : state.item
      }
    }
    case POSTS_EDIT: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.post.id ? action.post : item),
        item: state.item ? (state.item.id === action.post.id ? action.post : state.item) : {}
      }
    }

    default:
      return state;
  }
}
