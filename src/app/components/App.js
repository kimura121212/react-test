import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Counter from "../../common/container";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App
        </p>
        <Counter/>
        <div className="todo-app">
          <h1>Todo List</h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
