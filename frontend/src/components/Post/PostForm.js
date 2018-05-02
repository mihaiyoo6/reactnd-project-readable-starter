import React from 'react';
import uuid from 'uuid/v1';

const PostForm = ({ categories, create }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    create({
      id: uuid(),
      timestamp: Date.now(),
      author: formData.get('author'),
      title: formData.get('title'),
      body: formData.get('body'),
      category: formData.get('category')
    });
    form.reset();
  }
  return (
    <form onSubmit={onSubmit}>
      <div><label htmlFor="author">Author: <input type="text" name="author" required /></label></div>
      <div><label htmlFor="category">Category:
        <select name="category" id="category">
          {categories.map(category => <option key={category.path} value={category.name}>{category.name}</option>)}
        </select>
      </label></div>
      <div><label htmlFor="title">title: <input type="text" name="title" required /></label></div>
      <div><label htmlFor="body">Text: <textarea name="body" required /></label></div>
      <button type="submit">Add Post</button>
    </form>
  )
}

export default PostForm;
