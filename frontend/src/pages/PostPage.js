import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  fetchPostSingle,
  postVote
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

    return (
      <div>
        <div className="posts">
          POST
          {loading
            ? <div>Loading...</div>
            : <Post {...post} postVote={this.props.postVote} />}
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
    post: state.posts.item,
    loading: state.posts.loading,
    error: state.posts.error
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPost: fetchPostSingle,
    postVote

  },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
