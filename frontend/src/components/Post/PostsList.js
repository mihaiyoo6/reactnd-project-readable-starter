import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  fetchPosts,
  postVote,
  postsSort,
  postCreate,
  postDelete,
  postEdit
} from '../../actions/posts';
import Post from './Post';
import PostForm from './PostForm';

class PostList extends Component {
  state = {
    sort: {
      by: 'timestamp',
      order: ''
    }
  }
  componentDidMount() {
    this.props.getPosts(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.getPosts(nextProps.category);
    }
  }
  changeSort(by) {
    this.setState({
      sort: { by, order: this.state.sort.order === 'ASC' ? 'DESC' : 'ASC' }
    });
    this.props.postsSort(this.props.posts, by, this.state.sort.order);
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
        <div>sort posts by:
          <span onClick={() => this.changeSort('timestamp')}> time: {this.state.sort.by === 'timestamp' && this.state.sort.order} </span>
          |
          <span onClick={() => this.changeSort('voteScore')}> votes: {this.state.sort.by === 'voteScore' && this.state.sort.order} </span>
        </div>
        {posts.filter(item => !item.deleted).map(post =>
          <Post key={post.id} {...post} categories={this.props.categories} postVote={this.props.postVote} postDelete={this.props.postDelete} postEdit={this.props.postEdit} />
        )}
        {!error && !loading &&
          <div>
            <h3>Add new Post</h3>
            <PostForm categories={this.props.categories} onSubmit={this.props.postCreate} />
          </div>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error,
  categories: state.categories.items
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPosts: fetchPosts,
    postVote,
    postsSort,
    postCreate,
    postDelete,
    postEdit
  },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

