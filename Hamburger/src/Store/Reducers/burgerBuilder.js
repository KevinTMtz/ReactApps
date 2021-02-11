import * as actionTypes from '../Actions/actionTypes';

const INGREDIENT_PRICES = {
  bacon: 0.5,
  salad: 0.5,
  cheese: 0.7,
  meat: 1.5,
};

const initialState = {
  ingredients: { bacon: 0, salad: 0, cheese: 0, meat: 0 },
  totalPrice: 3.99,
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
    default:
      return state;
  }
};

export default reducer;
