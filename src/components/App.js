import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1 style={{ fontSize: '45px' }}>Todo</h1>

      <div class="ui fluid input box-shadow">
        <input type="text" placeholder="What do you need to do?" />
      </div>
    </div>
  );
};

export default App;
