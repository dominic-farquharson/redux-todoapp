import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import { addTodo } from '../../actions';
import TodoForm from '../TodoForm';
import { bindActionCreators } from 'redux';

// connecting to the redux store - no args, only want to map dispatch
/*
  No first argument provided. Will not subscribe to redux store updates
*/

// injecting action creators as actions - must return an object
function mapDispatchToProps(dispatch) {
  // takes action creators + dispatch call
  return (
    // actions: bindActionCreators(actionCreators, dispatch ) passing action prop containing all actions
     bindActionCreators({ addTodo}, dispatch) // injecting a specific action creator - props with function name - returns object
  )
  
}

// passing null as first arg - do not want to subcribe to store
const AddTodo = connect(null, mapDispatchToProps)(TodoForm); // returning new component
export default AddTodo;
