import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../utility';

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
  building: false,
};

const returnFixedNum = (number) => +number.toFixed(2);

const addIngredient = (state, action) =>
  updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredientKey]:
        state.ingredients[action.ingredientKey] + 1,
    }),
    totalPrice: returnFixedNum(
      state.totalPrice + INGREDIENT_PRICES[action.ingredientKey]
    ),
    building: true,
  });

const removeIngredient = (state, action) =>
  updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredientKey]:
        state.ingredients[action.ingredientKey] - 1,
    }),
    totalPrice: returnFixedNum(
      state.totalPrice - INGREDIENT_PRICES[action.ingredientKey]
    ),
    building: true,
  });

const setIngedient = (state, action) =>
  updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: initialState.totalPrice,
    error: false,
    building: false,
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngedient(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
