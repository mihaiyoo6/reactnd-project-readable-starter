import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, category, title, body, author, timestamp, voteScore, commentCount, postVote }) => {
  return (
    <div className="post-wrap">
      <Link to={`/${category}/${id}`} key={id}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
      <div>{author}</div>
      <div>{timestamp}</div>
      <div>Votes: {voteScore}</div>
      <div>
        <span onClick={() => postVote(id, 'upVote')}> UpVote + </span>
        |
        <span onClick={() => postVote(id, 'downVote')}> DownVote -</span>
      </div>
      <div> Comments: {commentCount}</div>
    </div>
  )
}

export default Post;
