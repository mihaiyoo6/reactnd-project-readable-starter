import React, { Component } from 'react';
import { getComments } from '../utils/api';

class PostPage extends Component {
  state = {
    isLoading: this.props.isLoading,
    post: this.props.post,
    isLoadingComments: true,
    comments: [],
  }
  componentDidMount() {
    if (!this.state.post) {
      return;
    }
    getComments(this.state.post.id).then(comments => this.setState({ comments, isLoadingComments: false }))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: nextProps.isLoading, post: nextProps.post });
    getComments(nextProps.post.id).then(comments => this.setState({ comments, isLoadingComments: false }))
  }
  render() {
    const { post, isLoading, comments, isLoadingComments } = this.state;
    console.log('this', this.state);
    return (
      <div>
        <div className="posts">
          {isLoading ? 'Post is loading' :
            !post ? 'Post not found' :
              <div>{post.title}</div>
          }
        </div>
        <div className="comments">
          {isLoadingComments ? 'Comments are loading' :
            comments.length === 0 ? 'Comments are not found' :
              comments.map(comment => <div key={comment.id}>{comment.body}</div>)
          }
        </div>
      </div>
    );
  }
}

export default PostPage;
