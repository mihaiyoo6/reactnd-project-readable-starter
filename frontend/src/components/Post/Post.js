import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PostForm from './PostForm';

class Post extends Component {
  state = {
    isEditing: false,
    body: this.props.post ? this.props.post.body : '',
    category: this.props.post ? this.props.post.category : '',
    title: this.props.post ? this.props.post.title : '',
    author: this.props.post ? this.props.post.author : ''
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isEditing: false });
  }

  edit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { id, category, title, body, author, timestamp, voteScore, commentCount, postVote, postDelete, categories } = this.props;
    if (this.state.isEditing) {
      return <PostForm post={{ id, body, author, title }} categories={categories} onSubmit={this.props.postEdit} />
    } else {

    }
    return (
      <div className="post-wrap">
        <Link to={`/${category}/${id}`} key={id}>
          <h2>{title}</h2>
        </Link>
        <p>{body}</p>
        <div>{author}</div>
        <div>{moment(timestamp).startOf('seconds').fromNow()}</div>
        <div>Votes: {voteScore}</div>
        <div>
          <span onClick={() => postVote(id, 'upVote')}> UpVote + </span>
          |
          <span onClick={() => postVote(id, 'downVote')}> DownVote -</span>
        </div>
        <div> Comments: {commentCount}</div>
        <div>
          <span onClick={() => postDelete(id)}>X Delete Post</span>
          <span onClick={() => this.edit()} role='img' aria-label='edit post'> &#9998;  Edit Post</span>
        </div>
      </div>
    )
  }
}

export default Post;
