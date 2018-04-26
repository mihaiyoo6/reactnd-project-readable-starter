import React from 'react';
import PostLink from '../components/Post/PostLink';

const CategoryPage = ({ posts, isLoading }) => {
  console.log(posts);
  return (
    <div className="posts">
      {isLoading
        ? 'Loading Posts...' :
        posts.length === 0
          ? 'No posts for this category'
          : posts
            .map(post =><PostLink {...post} />)}
    </div>
  );
}

export default CategoryPage;
