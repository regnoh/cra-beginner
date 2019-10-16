import { connect } from "react-redux";
import { FILTERS } from "../components/Todos/Footer";
import { toggleTodo } from "../actions/todos";
import TodoList from "../components/todos/TodoList";
const getVisibleTodos = ({ todos, filter }) => {
  switch (filter) {
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
// TODO:
const mapDispatchToProps = (dispatch, ownProps) => ({
  onTodoClick: id => dispatch(toggleTodo(id))

  // setVisibilityFilter: dispatch(setVisibilityFilter(ownProps.filter))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
