import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={MainPage} />
      </div>
    );
  }
}

export default App;
