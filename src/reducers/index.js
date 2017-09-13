import { combineReducers } from 'redux';
import todoReducer from './todos';
import visibilityFilter from './visibilityFilter';

/*
  Reducer:
    - pure function that takes the previous state and an action and returns the next state.
      - ex: given the same arguments, it should return the exact same state.
    - start with an intial state. If it's called with an undefined action, it will return the initial state or current state.
      ( reducer is called with an undefined state initially )  

  Things to never do within reducer:
    - mutate its arguments
    - perform side effects (API calls, etc)
    - call non pure functions (Math.random(), etc)
*/

/*
  The combineReducers helper function turns an object whose values are different 
  reducing functions into a single reducing function you can pass to createStore.

  The resulting reducer calls every child reducer, and gathers their results into a single state object. 
  The shape of the state object matches the keys of the passed reducers
*/

// root reducer - combine individual reducers to form a single one
const todoApp = combineReducers({
  todos: todoReducer,
  visibilityFilter
})

export default todoApp;

