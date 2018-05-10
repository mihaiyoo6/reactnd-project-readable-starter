import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  fetchPostSingle,
  postVote,
  postDelete,
  postEdit
} from '../actions/posts';
import CategoryList from '../components/Category/CategoryList';
import CommentsList from '../components/Comment/CommentsList';
import Post from '../components/Post/Post';


class PostPage extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.fetchPostSingle(postId).catch(err => {
      this.props.history.push('/404');
    });
  }
  render() {
    const { postId } = this.props.match.params;
    const { error, loading, post } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (post && post.deleted) {
      this.props.history.push('/');
    }
    if (!loading && !post) {
      this.props.history.push('/404');
    }

    return (
      <div>
        <CategoryList />
        <div className="posts">
          <h1>POST</h1>
          {loading
            ? <div>Loading...</div>
            : <Post {...post} postVote={this.props.postVote} categories={this.props.categories} postDelete={this.props.postDelete} postEdit={this.props.postEdit} />}
        </div>
        <div className="comments">
          <CommentsList postId={postId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.items,
    post: state.posts.item,
    loading: state.posts.loading,
    error: state.posts.error
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPostSingle,
    postVote,
    postDelete,
    postEdit

  },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
