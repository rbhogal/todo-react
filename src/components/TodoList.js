import React from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
  return (
    <div>
      <h1 style={{ fontSize: '45px' }}>todos</h1>
      <TodoForm />
    </div>
  );
};

export default TodoList;
