import {
  getPosts,
  getPost,
  postPostVote,
  postPostCreate,
  deletePostDelete,
  putPostEdit
} from '../utils/api';

import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_BEGIN_SINGLE,
  FETCH_POSTS_SUCCESS_SINGLE,
  FETCH_POSTS_FAILURE_SINGLE,
  POSTS_VOTE,
  POSTS_CREATE,
  POSTS_DELETE,
  POSTS_EDIT
} from './types';

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

export const postCreateSuccessful = post => ({
  type: POSTS_CREATE,
  post
});

export function postCreate(data) {
  return dispatch => {
    return postPostCreate({ ...data })
      .then(post => dispatch(postCreateSuccessful(post)));
  };
}

export const postDeleteSuccessful = post => ({
  type: POSTS_DELETE,
  post
});

export function postDelete(id) {
  return dispatch => {
    return deletePostDelete(id)
      .then(post => dispatch(postDeleteSuccessful(post)))
  }
}

export const postEditSuccessful = post => ({
  type: POSTS_EDIT,
  post
});

export function postEdit(data) {
  return dispatch => {
    return putPostEdit(data)
      .then(post => dispatch(postEditSuccessful(post)))
  }
}
