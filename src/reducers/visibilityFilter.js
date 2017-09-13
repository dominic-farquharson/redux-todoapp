/*
  Reducer - takes current state + action, returns next state
  - pure function
*/

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      // filter state: based on action
      return action.filter
    default:
      return state; // default is to show ALL
  }
}

export default visibilityFilter;