import React from 'react';
import AddTodo from './containers/AddTodo';

/*
  does not communicate with store
*/

const TodoList = props => {
  const todos = props.todos.map((todo, i) => {
    return (
      <li 
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
        key={i}
      >
        <h2>{todo.text}</h2>
        <button
          onClick={() => props.removeTodo(todo.id)}
        >
          Delete
        </button>
        <button
          // complete or not complete
          onClick={() => props.toggleTodo(todo.id)}
        >
          Toggle 
        </button>
      </li>
    )
  });

  return (
    <div>
      <ul>{todos}</ul>
      <AddTodo />
    </div>
  )
}

export default TodoList;