import React from 'react';
import AddTodo from './containers/AddTodo';

/*
  does not communicate with store
*/

const TodoList = props => {
  const todos = props.todos.map((todo, i) => {
    return <li key={i}>{todo.text}</li>
  });

  return (
    <div>
      <ul>{todos}</ul>
      <AddTodo />
    </div>
  )
}

export default TodoList;