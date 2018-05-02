import React from 'react';
import moment from 'moment';

const Comment = ({ id, body, author, timestamp, voteScore, commentVote, commentDelete }) => {

  return (
    <div className="comment-wrap">
      <p>{body}</p>
      <div>{author}</div>
      <div>{moment(timestamp).startOf('seconds').fromNow()}</div>
      <div>Votes: {voteScore}</div>
      <div>
        <span onClick={() => commentVote(id, 'upVote')}> UpVote + </span>
        |
        <span onClick={() => commentVote(id, 'downVote')}> DownVote -</span>
      </div>
      <span onClick={() => commentDelete(id)}>X Delete Comment</span>
    </div>
  )
}

export default Comment;
