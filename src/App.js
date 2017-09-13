import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer hi="hi" />
      </div>
    );
  }
}

export default App;
