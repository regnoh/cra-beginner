import { combineReducers } from "redux";
import cart from "./cart";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
export default combineReducers({
  cart,
  todos,
  visibilityFilter
});
