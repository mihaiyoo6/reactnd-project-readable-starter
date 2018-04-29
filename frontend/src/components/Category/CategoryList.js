import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
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
        {categories.map(category =>
          <Category key={category.path} {...category} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error
  }
};


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCategories: fetchCategories
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

