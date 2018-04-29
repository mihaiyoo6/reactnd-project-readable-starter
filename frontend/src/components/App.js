import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:category' component={CategoryPage} />
      </div>
    );
  }
}

export default App;
