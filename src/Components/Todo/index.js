import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Todo extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.title === this.props.title &&
      nextProps.description === this.props.description
    )
      return false;

    return true;
  }

  onClick = () => {
    this.props.updateTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <button onClick={this.onClick}>edit todo</button>
      </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
