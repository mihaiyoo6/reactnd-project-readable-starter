import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPostSingle } from '../actions/posts';
import CommentsList from '../components/Comment/CommentsList';
import Post from '../components/Post/Post';


class PostPage extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.getPost(postId);
  }
  render() {
    const { postId } = this.props.match.params;
    console.log('props', this.props);
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
            : <Post {...post} />}
        </div>
        <div className="comments">
          <CommentsList postId={postId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    post: state.posts.item,
    loading: state.posts.loading,
    error: state.posts.error
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPost: fetchPostSingle
  },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
