import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Post = ({ id, category, title, body, author, timestamp, voteScore, commentCount, postVote, postDelete }) => {
  return (
    <div className="post-wrap">
      <Link to={`/${category}/${id}`} key={id}>
        <h2>{title}</h2>
      </Link>
      <p>{body}</p>
      <div>{author}</div>
      <div>{moment(timestamp).startOf('seconds').fromNow()}</div>
      <div>Votes: {voteScore}</div>
      <div>
        <span onClick={() => postVote(id, 'upVote')}> UpVote + </span>
        |
        <span onClick={() => postVote(id, 'downVote')}> DownVote -</span>
      </div>
      <div> Comments: {commentCount}</div>
      <div>
        <span onClick={() => postDelete(id)}>X Delete Post</span>
      </div>
    </div>
  )
}

export default Post;
