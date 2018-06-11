import _ from 'lodash';
import React, { Component } from 'react';

export default WrappedComponent =>
  class TodosContainer extends Component {
    constructor() {
      super();
      this.state = { todos: {} };
    }

    addTodo = todo =>
      this.setState({
        todos: { ...this.state.todos, [todo.id]: todo }
      });

    updateTodo = updatedTodo => {
      this.setState({
        ...this.state.todos,
        [updatedTodo.id]: {
          ...this.state.todos[todo.id],
          ...updatedTodo
        }
      });
    };

    render() {
      return (
        <WrappedComponent addTodo={this.addTodo} updateTodo={this.updateTodo} />
      );
    }
  };
