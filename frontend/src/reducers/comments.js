import {
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  COMMENTS_VOTE,
  COMMENTS_CREATE,
  COMMENTS_DELETE,
  COMMENTS_EDIT
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  error: null
};


export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.comments
      }

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    case COMMENTS_VOTE:
      return {
        ...state,
        items: state.items.map(item => item.id === action.comment.id ? action.comment : item)
      };

    case COMMENTS_CREATE:
      return {
        ...state,
        items: [...state.items, action.comment]
      }

    case COMMENTS_DELETE:
      return {
        ...state,
        items: state.items.map(item => item.id === action.comment.id ? action.comment : item)
      }

    case COMMENTS_EDIT:
      return {
        ...state,
        items: state.items.map(item => item.id === action.comment.id ? action.comment : item)
      }
    default:
      return state;
  }
}
