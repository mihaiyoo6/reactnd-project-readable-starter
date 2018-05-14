import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';
import PostPage from '../pages/PostPage';
import NotFound from '../pages/404';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/:category' component={CategoryPage} />
          <Route exact path='/:category/:postId' component={PostPage} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
