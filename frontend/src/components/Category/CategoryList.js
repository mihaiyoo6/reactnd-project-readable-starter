import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../actions/categories';
import Category from './Category';

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { error, loading, categories } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Categories</h1>
        <Link to='/'>All Categories</Link>
        {categories.map(category =>
          <Category key={category.path} {...category} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.items,
    loading: categories.loading,
    error: categories.error
  }
};

export default connect(
  mapStateToProps,
  {
    getCategories: fetchCategories
  }
)(CategoryList);
