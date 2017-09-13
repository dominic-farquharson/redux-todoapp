import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/containers/TodoListContainer';
// import ToggleVisibilityFilter from './components/ToggleVisibilityFilter';
import Filter from './components/containers/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListContainer hi="hi" />
        <Filter />
      </div>
    );
  }
}

export default App;
