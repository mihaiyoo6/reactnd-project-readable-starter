import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPosts } from '../../actions/posts';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post =>
          <Post key={post.id} {...post} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
  }
};


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPosts: fetchPosts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

