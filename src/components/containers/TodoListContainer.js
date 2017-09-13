// container component
import React from 'react';
import { connect } from 'react-redux';
// import AddTodo from './AddTodo';
import TodoList  from '../TodoList';


/*

ONLY HAVE LOGIC INSIDE CONTAINER COMPONENT
- communicates with Redux store

*/


/*
  connecting to the redux store
  1. with zero args - only injects dispatch into component
  2. first arg - what to subcribe to from store (mapStateToProps)
  3. seond arg - props passing down from component
*/


/// maps state to props, choose what part of state tree you'd like, returning object
const mapStateToProps = (state, ownprops) => {
  return {
    // mapping only todos
    todos: state.todos,
    hello: ownprops.hi
  }
}

// rendering presentational component - connecting component to redux store - returns new connected component
const TodoListContainer = connect(mapStateToProps)(TodoList);

export default TodoListContainer;



