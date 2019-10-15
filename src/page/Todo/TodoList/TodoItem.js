import React, { Component } from "react";
import PropTypes from "prop-types";
import { withLike } from "../../../Hoc";
@withLike
class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool
  };
  static defaultProps = {
    completed: false
  };
  state = {
    checked: this.props.completed
  };
  onChange = e => {
    this.setState({ checked: e.target.checked });
  };
  render() {
    return (
      <div>
        {this.state.checked ? "👌" : "  "}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange}
        />
        {this.props.title}
      </div>
    );
  }
}
// export default withLike(TodoItem);
export default TodoItem;
