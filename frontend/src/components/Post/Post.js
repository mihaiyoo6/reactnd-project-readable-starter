import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({id, title}) => {
  return (
    <div className="post-wrap">
      <Link to={`/posts/${id}`} key={id}>{title}</Link>
    </div>
  )
}

export default Post;
