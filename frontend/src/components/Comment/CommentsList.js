import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { 
  fetchComments,
  commentVote,
  commentCreate } from '../../actions/comments';
import Comment from './Comment';
import CommentForm from './CommentForm';
class CommentsList extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }
  render() {
    const { error, loading, comments, commentVote } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Comments</h1>
        {comments.map(comment =>
          <Comment key={comment.id} {...comment} commentVote={commentVote} />
        )}
        {!error && !loading && <CommentForm postId={this.props.postId} create={this.props.commentCreate} />}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    comments: state.comments.items,
    loading: state.comments.loading,
    error: state.comments.error
  }
};


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getComments: fetchComments,
      commentVote,
      commentCreate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);

