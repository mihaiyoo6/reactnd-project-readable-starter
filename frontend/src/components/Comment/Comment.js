import React, { Component } from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';

class Comment extends Component {
  state = {
    isEditing: false
  }

  edit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.body !== this.props.body && this.state.isEditing) {
      this.setState({ isEditing: false });
    }
  }

  render() {
    const { id, body, author, timestamp, parentId, voteScore, commentVote, commentDelete, commentEdit } = this.props;

    if (this.state.isEditing) {
      return <CommentForm comment={{ id, body, author }} postId={parentId} onSubmit={commentEdit} />
    } else {
      return <div className="comment-wrap">
        <p>{body}</p>
        <div>{author}</div>
        <div>{moment(timestamp).startOf('seconds').fromNow()}</div>
        <div>Votes: {voteScore}</div>
        <div>
          <span onClick={() => commentVote(id, 'upVote')} role='img'> &#128077; </span>
          |
          <span onClick={() => commentVote(id, 'downVote')} role='img'> 	&#128078; </span>
        </div>
        <span onClick={() => commentDelete(id)}>X Delete Comment</span>
        <span onClick={() => this.edit()}> &#9998;  Edit Comment</span>
      </div>
    }

  }
}

export default Comment;
