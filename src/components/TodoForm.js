import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';

import { actionCreators } from '../actions';

const TodoForm = () => {
  const state = useSelector(state => state); // extracts data from Redux store state
  console.log('extracted store state');

  const dispatch = useDispatch(); // returns reference to the dispatch function from Redux store. Dispatches actions
  const { createTodo } = bindActionCreators(actionCreators, dispatch); // turns an object whose values are action creators, into an object with the same keys, but every action wrapped into a dispatch call so they may be invoked directly

  const onSubmit = todoItem => {
    createTodo(todoItem);
    console.log('dispatched todo item to createTodo reducer');
    renderInput(todoItem);
  };

  const renderInput = todoItem => {
    {
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="ui massive fluid input box-shadow">
            <Field
              component="input"
              name="todoItem"
              placeholder="What do you need to do"
            />
          </div>
        </form>
      )}
    ></Form>
  );
};
export default TodoForm;
