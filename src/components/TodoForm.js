import React, { Component } from 'react';
import { addTodo } from '../actions';

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        console.log('todo', this.refs.todo.value)
        let val = this.refs.todo.value
        /*
          this.props.dispatch(addTodo(val)) can do this or instead use actions object
          this.props.actions.addTodo(val);  if actions were injected from object
          if action was injected as function - can just call function via props
        */
        this.props.addTodo(val);
      }}>
        <input ref="todo" type="text" placeholder="enter what you'd like to do" />
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;