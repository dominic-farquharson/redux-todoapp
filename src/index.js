import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index';
// provider component - passes store to each component (wraps up root component)

// pass in root reducer - create redux store
let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

