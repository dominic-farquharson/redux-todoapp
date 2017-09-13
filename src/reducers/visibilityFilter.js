/*
  Reducer - takes current state + action, returns next state
  - pure function
*/

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('action for filter', action)
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log('returning specific filter', action.filter)
      // filter state: based on action
      return action.filter
    default:
      console.log('returning entire state')
      return state; // default is to show ALL
  }
}

export default visibilityFilter;