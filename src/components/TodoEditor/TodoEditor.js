import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './TodoEditor.module.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={s.TodoEditor} onSubmit={this.handleSubmit}>
        <textarea
          className={s.TodoEditor__textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={s.TodoEditor__button}>
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
