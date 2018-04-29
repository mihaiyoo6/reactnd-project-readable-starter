import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ path, name }) => {

  return (
    <div className="category-wrap">
      <Link to={`/${path}`}>{name}</Link>
    </div>
  )
}

export default Category;
