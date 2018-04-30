import { getComments } from '../utils/api';

export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsBegin = () => ({
  type: FETCH_COMMENTS_BEGIN
});

export const fetchCommentsSuccessful = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments }
});

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: { error }
});

export function fetchComments(postId) {
  return dispatch => {
    dispatch(fetchCommentsBegin());
    return getComments(postId)
      .then(comments => dispatch(fetchCommentsSuccessful(comments)))
      .catch(error => dispatch(fetchCommentsFailure(error)));
  }
}