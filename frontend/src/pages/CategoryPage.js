import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = ({ posts, isLoading }) => {
  console.log(posts);
  return (
    <div className="posts">
      {isLoading
        ? 'Loading Posts...' :
        posts.length === 0
          ? 'No posts for this category'
          : posts
            .map(({ id, title }) =>
              <Link to={`/posts/${id}`} key={id}>{title}</Link>)}
    </div>
  );
}

export default CategoryPage;
