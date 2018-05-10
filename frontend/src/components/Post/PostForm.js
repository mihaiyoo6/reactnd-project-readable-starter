import React, { Component } from 'react';
import uuid from 'uuid/v1';

class PostForm extends Component {
  state = {
    id: this.props.post ? this.props.post.id : uuid(),
    category: this.props.post ? this.props.post.category : (this.props.categories[0] ? this.props.categories[0].path : ''),
    title: this.props.post ? this.props.post.title : '',
    body: this.props.post ? this.props.post.body : '',
    author: this.props.post ? this.props.post.author : ''
  }

  onchange = field => e => this.setState({ [field]: e.target.value });

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      timestamp: Date.now(),
      category: this.state.category,
      author: this.state.author,
      title: this.state.title,
      body: this.state.body
    });
    this.setState({
      id: '',
      category: '',
      title: '',
      body: '',
      author: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label htmlFor="author">
            Author: <input type="text" name="author" required value={this.state.author} onChange={this.onchange('author')} disabled={this.props.post} />
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Category:
            <select name="category" id="category" value={this.state.category} onChange={this.onchange('category')} disabled={this.props.post} >
              {this.props.categories.map(category => <option key={category.path} value={category.name}>{category.name}</option>)}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="title">
            Title: <input type="text" name="title" required value={this.state.title} onChange={this.onchange('title')} />
          </label>
        </div>
        <div>
          <label htmlFor="body">
            Text: <textarea name="body" required value={this.state.body} onChange={this.onchange('body')} />
          </label>
        </div>
        <button type="submit">{this.props.post ? 'Save Post' : 'Add Post'}</button>
      </form>
    )
  }
}

export default PostForm;
