import React from 'react';

const Comment = ({ id, body, author, timestamp, voteScore }) => {
  return (
    <div className="comment-wrap">
      <p>{body}</p>
      <div>{author}</div>
      <div>{timestamp}</div>
      <div>Votes: {voteScore}</div>
    </div>
  )
}

export default Comment;
