/*
  Actions:
    - payloads of informtion.
    - sends data from application to the store.
    - send actions using store.dispatch.
    - plain javascript objects containing information
    - must have a type property ('string constant').

  Action Creators
    - functions that create actions


*/

let index = 0;

// adding a todo
export const addTodo = text => {
  // returning an object describing change to be made
  return {
    type: 'ADD_TODO',
    text,
    id: index++
  }
}


// remove a to do - take todo item's id as arg
export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

// toggle to do - takes todo's id as arg
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

// visibility filter
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBLITY_FILTER',
    filter
  }
}