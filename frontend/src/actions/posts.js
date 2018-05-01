import {
  getPosts,
  getPost,
  postPostVote
} from '../utils/api';

export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_BEGIN_SINGLE = 'FETCH_POSTS_BEGIN_SINGLE';
export const FETCH_POSTS_SUCCESS_SINGLE = 'FETCH_POSTS_SUCCESS_SINGLE';
export const FETCH_POSTS_FAILURE_SINGLE = 'FETCH_POSTS_FAILURE_SINGLE';
export const POSTS_VOTE = 'POSTS_VOTE';
export const POSTS_SORT = 'POSTS_SORT';

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

export const postVoteSuccessful = post => ({
  type: POSTS_VOTE,
  post
});

export function postVote(postId, voteType) {
  return dispatch => {
    return postPostVote(postId, voteType)
      .then(post => dispatch(postVoteSuccessful(post)));
  }
}

export function postsSort(list, by, order) {
  return dispatch => {
    let compare = (a, b) => a[by] > b[by];
    if (order === 'ASC') {
      compare = (a, b) => a[by] < b[by];
    }
    return list.sort(compare);
  }
}