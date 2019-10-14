import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ title }) => {
  return <div>{todo.title}</div>;
};
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
};
TodoItem.defaultProps = {
  todo: {
    id: 1,
    title: "todo title",
    completed: true
  }
};
export default TodoItem;
