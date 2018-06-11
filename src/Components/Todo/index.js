import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Todo extends Component {
  componentDidMount() {}

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.title === this.props.title &&
      nextProps.description === this.props.description
    )
      return false;

    return true;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
