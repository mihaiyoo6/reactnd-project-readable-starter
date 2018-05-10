import {
  getComments,
  postCommentVote,
  postCommentCreate,
  deleteCommentDelete,
  putCommentEdit
} from '../utils/api';

import {
  FETCH_COMMENTS_BEGIN,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  COMMENTS_VOTE,
  COMMENTS_CREATE,
  COMMENTS_DELETE,
  COMMENTS_EDIT
} from './types';

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

export const commentVoteSuccessful = comment => ({
  type: COMMENTS_VOTE,
  comment
});

export function commentVote(commentId, voteType) {
  return dispatch => {
    return postCommentVote(commentId, voteType)
      .then(comment => dispatch(commentVoteSuccessful(comment)));
  }
}

export const commentCreateSuccessful = comment => ({
  type: COMMENTS_CREATE,
  comment
});

export const commentCreate = data => {
  return dispatch => {
    return postCommentCreate(data)
      .then(comment => dispatch(commentCreateSuccessful(comment)));
  }
}

export const commentDeleteSuccessful = comment => ({
  type: COMMENTS_DELETE,
  comment
});

export function commentDelete(id) {
  return dispatch => {
    return deleteCommentDelete(id)
      .then(comment => dispatch(commentDeleteSuccessful(comment)))
  }
}

export const commentEditSuccessful = comment => ({
  type: COMMENTS_EDIT,
  comment
});

export function commentEdit(data) {
  return dispatch => {
    return putCommentEdit(data)
      .then(comment => dispatch(commentEditSuccessful(comment)))
  }
}