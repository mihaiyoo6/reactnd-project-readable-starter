import React from 'react';
import uuid from 'uuid/v1';

const CommentForm = ({ postId, create }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    create({
      id: uuid(),
      timestamp: Date.now(),
      parentId: postId,
      author: formData.get('author'),
      body: formData.get('body')
    });
    form.reset();
  }
  return (
    <form onSubmit={onSubmit}>
      <div><label htmlFor="author">Author: <input type="text" name="author" required /></label></div>
      <div><label htmlFor="body">Comment: <textarea name="body" required /></label></div>
      <button type="submit">Add Comment</button>
    </form>
  )
}

export default CommentForm;
