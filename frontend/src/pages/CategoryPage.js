import React from 'react';
import CategoryList from '../components/Category/CategoryList';
import PostsList from '../components/Post/PostsList';

const CategoryPage = props => {
  console.log('path', props.match.params.category);
  return (
    <div className="container">
      <CategoryList />
      <PostsList category={props.match.params.category} />
    </div>
  )
}

export default CategoryPage;
