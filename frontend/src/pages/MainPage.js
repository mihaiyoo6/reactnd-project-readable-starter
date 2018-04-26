import React from 'react';
import Category from '../components/Category/Category';
import PostLink from '../components/Post/PostLink';

const MainPage = props => {
  console.log(props);
  const { isLoading,
    categories,
    posts } = props;
  return (
    <div className="container">
      <div className="categories">
        {isLoading ? 'Loading Categories...' :
          categories.map(category => <Category  {...category}/>)}
      </div>
      <div className="posts">
        {isLoading ? 'Loading Posts...' :
          posts.map(post => <PostLink {...post} />)}
      </div>
    </div>
  )
}

export default MainPage;
