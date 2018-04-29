import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';
import Category from './Category';

class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
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
        {categories.map(category =>
          <Category key={category.path} {...category} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.items,
    loading: state.category.loading,
    error: state.category.error
  }
};

export default connect(mapStateToProps)(CategoryList);

