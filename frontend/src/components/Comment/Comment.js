import React from 'react';
import moment from 'moment';

const Comment = ({ id, body, author, timestamp, voteScore, commentVote }) => {

  return (
    <div className="comment-wrap">
      <p>{body}</p>
      <div>{author}</div>
      <div>{moment(timestamp).startOf('hour').fromNow()}</div>
      <div>Votes: {voteScore}</div>
      <div>
        <span onClick={() => commentVote(id, 'upVote')}> UpVote + </span>
        |
        <span onClick={() => commentVote(id, 'downVote')}> DownVote -</span>
      </div>
    </div>
  )
}

export default Comment;
