import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getPosts, getCategories } from '../utils/api';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';
import PostPage from '../pages/PostPage';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    categories: [],
    posts: []
  }
  componentDidMount() {
    Promise.all([getCategories(), getPosts()])
      .then(([categories, posts]) => this.setState({
        ...categories,
        posts,
        isLoading: false
      }));
  }
  render() {
    return (
      <div className='App'>
        <Route exact path='/'
          render={() => <MainPage {...this.state} />} />
        <Route path='/category/:path'
          render={(props) => {
            const categoryPath = props.match.params.path;
            const posts = this.state.posts.filter(item => item.category === categoryPath);
            return <CategoryPage posts={posts} isLoading={this.state.isLoading} />;
          }} />
        <Route path='/posts/:id'
          render={(props) => {
            const postId = props.match.params.id;
            const post = this.state.posts.find(({ id }) => id === postId);
            return <PostPage post={post} isLoading={this.state.isLoading} />;
          }} />
      </div>
    );
  }
}

export default App;
