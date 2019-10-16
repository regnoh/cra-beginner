import actionTypes from "./actionTypes";
export const increment = payload => ({
  type: actionTypes.CART_AMOUNT_INCREASE,
  payload
});
export const decrement = payload => ({
  type: actionTypes.CART_AMOUNT_DECREASE,
  payload
});
