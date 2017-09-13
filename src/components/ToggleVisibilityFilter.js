import React from 'react';

const ToggleVisibilityFilter = props => {
  return (
    <div>
      <button
        onClick={ ()=> props.setVisibilityFilter('SHOW_ALL')}
      >
        Show All
      </button>
      <button
        onClick={() => props.setVisibilityFilter('SHOW_ACTIVE')}
      >
        Show Active
      </button>
      <button
        onClick={() => props.setVisibilityFilter('SHOW_COMPLETED')}
      >
        Show Complete
      </button>
    </div>
  )
}

export default ToggleVisibilityFilter;