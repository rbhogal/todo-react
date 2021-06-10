import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import SignIn from './SignIn';
import TodoList from './TodoList';

const App = () => {
  return (
    
    <div className="App">
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
      <TodoList />
    </div>
  );
};

export default App;
