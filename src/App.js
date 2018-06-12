import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import TodosContainer from './Containers/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = { selectedTodo: null };
  }

  onTodoClicked = id => {
    if (this.state.selectedTodo === id)
      return this.setState({ selectedTodo: null });

    this.setState({ selectedTodo: id });
  };

  renderTodo = (todo, index) => (
    <Todo
      id={todo.id}
      key={index}
      description={todo.description}
      title={todo.title}
      updateTodo={this.onTodoClicked}
    />
  );

  renderTodos() {
    return _.map(this.props.todos, this.renderTodo);
  }

  selectedTodo = () => {
    if (this.state.selectedTodo)
      return this.props.todos[this.state.selectedTodo];
  };

  render() {
    return (
      <div className="App">
        {this.renderTodos()}
        <TodoForm
          addTodo={this.props.addTodo}
          updateTodo={this.props.updateTodo}
          selectedTodo={this.selectedTodo()}
        />
      </div>
    );
  }
}

export default TodosContainer(App);
