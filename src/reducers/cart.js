import actionTypes from "../actions/actionTypes";
const initialState = {
  amount: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CART_AMOUNT_INCREASE:
      return { ...state, amount: state.amount + payload };
    case actionTypes.CART_AMOUNT_DECREASE:
      return { ...state, amount: state.amount - payload };

    default:
      return state;
  }
};
