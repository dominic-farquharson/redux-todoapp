// container component
import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  const todos = props.todos.map((todo, i) => {
    return <li key={i}>{todo}</li>
  });

  return (
    <div>
      <ul>{todos}</ul>
    </div>
  )
}



/*
  connecting to the redux store
  1. with zero args - only injects dispatch into component
  2. first arg - what to subcribe to from store (mapStateToProps)
*/


/// maps state to props, choose what part of state tree you'd like
const mapStateToProps = state => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToProps)(TodoList);



