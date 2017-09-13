// container component
import React from 'react';
import { connect } from 'react-redux';
// import AddTodo from './AddTodo';
import TodoList  from '../TodoList';
import { removeTodo, toggleTodo } from '../../actions';
import { bindActionCreators } from 'redux';


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

const renderTodos = (todos, filter) => {
  console.log('filter', filter)
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => {
        return todo.completed === false
      })
    case 'SHOW_COMPLETED':
      return todos.filter(todo => {
        return todo.completed === true
      })
  }
}


/// maps state to props, choose what part of state tree you'd like, returning object
const mapStateToProps = (state, ownprops) => {
  console.log('current state', state)
  return {
    // mapping only todos
    todos: renderTodos(state.todos, state.visibilityFilter),
    filter: state.visibilityFilter,
    hello: ownprops.hi
  }
}

const mapDispatchToProps = (dispatch) => {
  // returning object with keys matching action creator
  return bindActionCreators({removeTodo, toggleTodo}, dispatch)
}

// rendering presentational component - connecting component to redux store - returns new connected component
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;



