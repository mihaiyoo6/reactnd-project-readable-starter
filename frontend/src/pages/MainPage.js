import React from 'react';
import CategoryList from '../components/Category/CategoryList';
import PostsList from '../components/Post/PostsList';

const MainPage = () => {
  return (
    <div className="container">
      <CategoryList />
      <PostsList />
    </div>
  )
}

export default MainPage;
