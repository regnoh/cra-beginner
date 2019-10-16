import actionTypes from "../actions/actionTypes";
const initialState = "SHOW_ALL";
export default (state = initialState, { type, filter }) => {
  switch (type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return filter;

    default:
      return state;
  }
};
