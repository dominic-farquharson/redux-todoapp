// takes  current state + action - returns next state

let initialState = [];

const todoReducer = (state = initialState , action) => { 
  // returning state based on the type of action
  switch(action.type) {
    case 'ADD_TODO': 
      // returning new array, not mutating state
      return [ 
        ...state,  // previu
        {
          id: action.id,
          text: action.text,
          completed: false

        }
      ]
    // remove todo item
    case 'REMOVE_TODO':
      // return new array, excluding item that was removed
      return state.filter(todo => {
        if(el.id !== action.id) return todo;
      })
    // toggling todo completion
    case 'TOGGLE_TODO':
      // returning new array
      return state.map(todo => {
        if(todo.id === action.id) { 
          return {
            ...todo,
            completed: !todo.completed // overriding previous completion state
          }
        }
        return todo; // do nothing
      })  
  }
}

export default todoReducer;