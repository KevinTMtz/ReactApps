import * as actionTypes from '../Actions/actionTypes';

const INGREDIENT_PRICES = {
  bacon: 0.5,
  salad: 0.5,
  cheese: 0.7,
  meat: 1.5,
};

const initialState = {
  ingredients: null,
  totalPrice: 3.99,
  error: false,
};

const returnFixedNum = (number) => +number.toFixed(2);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientKey]:
            state.ingredients[action.ingredientKey] + 1,
        },
        totalPrice: returnFixedNum(
          state.totalPrice + INGREDIENT_PRICES[action.ingredientKey]
        ),
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientKey]:
            state.ingredients[action.ingredientKey] - 1,
        },
        totalPrice: returnFixedNum(
          state.totalPrice - INGREDIENT_PRICES[action.ingredientKey]
        ),
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
