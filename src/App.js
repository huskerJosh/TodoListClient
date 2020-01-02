import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List Manager</h2>
        </div>
        <p className="App-intro"></p>

        <div className="Todo-modal">
          <AddItem></AddItem>
        </div>

        <br/>

        <div className="Todo-modal">
          <TodoList />
        </div>
      
      </div>
    );
  }
}

export default App;
