import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  fetchPostSingle,
  postVote,
  postDelete,
  postEdit
} from '../actions/posts';
import CommentsList from '../components/Comment/CommentsList';
import Post from '../components/Post/Post';


class PostPage extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.getPost(postId);
  }
  render() {
    const { postId } = this.props.match.params;
    const { error, loading, post } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (!post) {
      return <div>Post was removed</div>
    }

    return (
      <div>
        <div className="posts">
          POST
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
    getPost: fetchPostSingle,
    postVote,
    postDelete,
    postEdit

  },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
