import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/'
          render={() => <div>MainPage</div>} />
        <Route path='/category/:id'
          render={(props) => <div>Category {props.match.params.id}</div>} />
        <Route path='/posts/:id'
          render={(props) => <div>POST {props.match.params.id}</div>} />
      </div>
    );
  }
}

export default App;
