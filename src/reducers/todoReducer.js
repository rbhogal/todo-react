import { CREATE_TODO } from '../actions/types';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};
export default todoReducer;
