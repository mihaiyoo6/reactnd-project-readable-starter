import React from 'react';
import Category from '../components/Category/Category';
import PostLink from '../components/Post/PostLink';

const MainPage = props => {
  const { isLoading,
    categories,
    posts } = props;
  return (
    <div className="container">
      <div className="categories">
        {isLoading ? 'Loading Categories...' :
          categories.map(category => <Category key={category.path} {...category} />)}
      </div>
      <div className="posts">
        {isLoading ? 'Loading Posts...' :
          posts.map(post => <PostLink key={post.id} {...post} />)}
      </div>
    </div>
  )
}

export default MainPage;
