import React from 'react';
import s from './Todo.module.scss';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className={s.TodoList__checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={s.TodoList__text}>{text}</p>
    <button type="button" className={s.TodoList__btn} onClick={onDelete}>
      Delete
    </button>
  </>
);

export default Todo;
