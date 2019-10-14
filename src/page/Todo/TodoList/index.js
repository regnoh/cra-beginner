import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};
export default TodoList;
