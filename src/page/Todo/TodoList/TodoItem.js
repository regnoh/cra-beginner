import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ id, title, completed }) => {
  return (
    <div>
      {title}
      {completed && "  -👌"}
    </div>
  );
};
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
TodoItem.defaultProps = {
  todo: {
    id: 1,
    title: "todo title",
    completed: true
  }
};
export default TodoItem;
