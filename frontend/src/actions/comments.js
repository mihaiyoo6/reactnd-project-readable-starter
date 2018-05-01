import { 
  getComments,
  postCommentVote,
  postCommentCreate } from '../utils/api';

export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const COMMENTS_VOTE = 'COMMENTS_VOTE';
export const COMMENTS_CREATE = 'COMMENTS_CREATE';

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
  return dispatch =>{
    return postCommentCreate(data)
    .then(comment=> dispatch(commentCreateSuccessful(comment)));
  }
}