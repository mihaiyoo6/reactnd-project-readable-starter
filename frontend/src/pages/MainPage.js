import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = props => {
  console.log(props);
  const { isLoading,
    categories,
    posts } = props;
  return (
    <div className="container">
      <div className="categories">
        {isLoading ? 'Loading Categories...' :
          categories.map(({ path, name }) => <Link to={`/category/${path}`} key={path}>{name}</Link>)}
      </div>
      <div className="posts">
        {isLoading ? 'Loading Posts...' :
          posts.map(({ id, title }) => <Link to={`/posts/${id}`} key={id}>{title}</Link>)}
      </div>
    </div>
  )
}

export default MainPage;
