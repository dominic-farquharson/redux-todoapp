import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/containers/TodoListContainer';
import ToggleVisibilityFilter from './components/ToggleVisibilityFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer hi="hi" />
        <ToggleVisibilityFilter />
      </div>
    );
  }
}

export default App;
