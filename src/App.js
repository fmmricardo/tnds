import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  renderTodo = (todo, index) => (
    <Todo key={index} description={todo.description} title={todo.title} />
  );

  renderTodos() {
    return this.state.todos.map(this.renderTodo);
  }

  render() {
    return <div className="App">{this.renderTodos()}</div>;
  }
}

export default App;
