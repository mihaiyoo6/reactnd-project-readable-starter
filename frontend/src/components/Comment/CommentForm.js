import React, { Component } from 'react';
import uuid from 'uuid/v1';

class CommentForm extends Component {

  state = {
    postId: this.props.postId,
    id: this.props.comment ? this.props.comment.id : uuid(),
    body: this.props.comment ? this.props.comment.body : '',
    author: this.props.comment ? this.props.comment.author : '',
  };
  onchange = field => e => this.setState({ [field]: e.target.value });
  formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    this.props.onSubmit({
      id: this.state.id,
      timestamp: Date.now(),
      parentId: this.state.postId,
      author: formData.get('author'),
      body: formData.get('body')
    });
    this.setState({ id: '', author: '', body: '' })
  }
  render() {
    return (
      <form onSubmit={this.formSubmit} >
        <div><label htmlFor='author'>Author: <input type='text' name='author' value={this.state.author} disabled={this.props.comment} required onChange={this.onchange('author')} /></label></div>
        <div><label htmlFor='body'>Comment: <textarea name='body' required value={this.state.body} onChange={this.onchange('body')} /></label></div>
        <button type='submit'>{this.props.comment ? 'Save Comment' : 'Add Comment'}</button>
      </form>
    )
  }
}

export default CommentForm;
