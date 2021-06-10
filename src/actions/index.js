import { SIGN_IN, SIGN_OUT, CREATE_TODO, DELETE_TODO } from './types';

// Action creators
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createTodo = todoItem => {
  return dispatch => {
    dispatch({
      type: CREATE_TODO,
      payload: todoItem,
    });
  };
};

export const deleteTodo = todoItem => {
  return dispatch => {
    dispatch({
      type: DELETE_TODO,
      payload: todoItem,
    });
  };
};

export * as actionCreators from './index';
