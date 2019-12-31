import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import {Modal} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="Todo-modal">
        <TodoItem />
        </div>

        <TodoList></TodoList>
        
        
      </div>
    );
  }
}

export default App;
