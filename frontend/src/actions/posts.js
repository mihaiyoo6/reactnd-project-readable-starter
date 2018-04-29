import { getPosts } from '../utils/api';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccessful = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export function fetchPosts(category) {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return getPosts(category)
      .then(posts => dispatch(fetchPostsSuccessful(posts)))
      .catch(error => dispatch(fetchPostsFailure(error)));
  }
}