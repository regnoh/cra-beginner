import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};
export default TodoList;
