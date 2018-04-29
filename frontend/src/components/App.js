import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CategoryList from '../components/Category/CategoryList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={CategoryList} />
      </div>
    );
  }
}

export default App;
