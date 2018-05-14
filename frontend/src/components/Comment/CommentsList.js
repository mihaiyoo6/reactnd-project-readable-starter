import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  fetchComments,
  commentVote,
  commentCreate,
  commentDelete,
  commentEdit
} from '../../actions/comments';
import Comment from './Comment';
import CommentForm from './CommentForm';
class CommentsList extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }
  render() {
    const { error, loading, comments,
      commentVote, commentCreate, commentDelete, commentEdit } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Comments</h1>
        {comments.filter(i => !i.parentDeleted && !i.deleted).map(comment =>
          <Comment key={comment.id} {...comment} commentVote={commentVote} commentDelete={commentDelete} commentEdit={commentEdit} />
        )}
        {!error && !loading && <div>
          <h4>Add new Comment</h4>
          <CommentForm postId={this.props.postId} onSubmit={commentCreate} />
        </div>}
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
      commentCreate,
      commentDelete,
      commentEdit
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);

