import {
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from '../actions/comments';

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

    default:
      return state;
  }
}
