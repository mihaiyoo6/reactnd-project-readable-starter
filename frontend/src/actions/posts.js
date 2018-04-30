import { getPosts, getPost } from '../utils/api';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_BEGIN_SINGLE = 'FETCH_POSTS_BEGIN_SINGLE';
export const FETCH_POSTS_SUCCESS_SINGLE = 'FETCH_POSTS_SUCCESS_SINGLE';
export const FETCH_POSTS_FAILURE_SINGLE = 'FETCH_POSTS_FAILURE_SINGLE';

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


export const fetchPostSingleBegin = () => ({
  type: FETCH_POSTS_BEGIN_SINGLE
});

export const fetchPostSingleSuccessful = post => ({
  type: FETCH_POSTS_SUCCESS_SINGLE,
  payload: { post }
});

export const fetchPostSingleFailure = error => ({
  type: FETCH_POSTS_FAILURE_SINGLE,
  payload: { error }
});

export function fetchPostSingle(postId) {
  return dispatch => {
    dispatch(fetchPostSingleBegin());
    return getPost(postId)
      .then(post => dispatch(fetchPostSingleSuccessful(post)))
      .catch(error => dispatch(fetchPostSingleFailure(error)))
  }
}