import _ from 'lodash';
import React, { Component } from 'react';

export default WrappedComponent =>
  class TodosContainer extends Component {
    constructor() {
      super();
      this.state = {
        todos: {}
      };
    }

    addTodo = todo => {
      const id = _.toArray(this.state.todos).length + 1;

      this.setState({
        todos: { ...this.state.todos, [id]: { ...todo, id } }
      });
    };

    updateTodo = updatedTodo => {
      this.setState({
        todos: {
          ...this.state.todos,
          [updatedTodo.id]: {
            ...this.state.todos[updatedTodo.id],
            ...updatedTodo
          }
        }
      });
    };

    get todos() {
      return this.state.todos;
    }

    render() {
      return (
        <WrappedComponent
          todos={this.todos}
          addTodo={this.addTodo}
          updateTodo={this.updateTodo}
        />
      );
    }
  };
