import React from 'react';
import logo from '../logo.svg';
import AddTodo from "../../common/AddTodo";
import TodoList from "../../common/TodoList";
import VisibilityFilters from "../../common/VisibilityFilters";
import '../App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App
        </p>
        <div className="todo-app">
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
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
