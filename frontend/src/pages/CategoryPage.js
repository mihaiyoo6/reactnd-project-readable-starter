import React from 'react';
import CategoryList from '../components/Category/CategoryList';
import PostsList from '../components/Post/PostsList';

const CategoryPage = props => {
  return (
    <div className="container">
      <CategoryList />
      <PostsList category={props.match.params.category} />
    </div>
  )
}

export default CategoryPage;
