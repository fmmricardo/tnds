import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = { title: '', description: '' };
  }

  onSubmit = event => {
    event.preventDefault();

    const {
      title: { value: title },
      description: { value: description }
    } = event.target.elements;

    this.setState({ title, description });
    this.props.addTodo(this.state);
  };

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  get title() {
    if (this.props.selectedTodo) return this.props.selectedTodo.title;

    return this.state.title;
  }

  get description() {
    if (this.props.selectedTodo) return this.props.selectedTodo.description;

    return this.state.description;
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          value={this.title}
        />
        <textarea
          type="text"
          name="description"
          onChange={this.onChange}
          value={this.description}
        />
      </form>
    );
  }
}
