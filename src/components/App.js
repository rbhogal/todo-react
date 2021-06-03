import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        

          <Header />
        
      </BrowserRouter>

      <h1 style={{ fontSize: '45px' }}>todos</h1>

      <div className="ui massive fluid input box-shadow">
        <input type="text" placeholder="What do you need to do?" />
      </div>
    </div>
  );
};

export default App;
