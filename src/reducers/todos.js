import actionTypes from "../actions/actionTypes";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { id: action, text: action.text, completed: false }];
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        action.id === todo.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};
