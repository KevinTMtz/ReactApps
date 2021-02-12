import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredientKey) => ({
  type: actionTypes.ADD_INGREDIENT,
  ingredientKey: ingredientKey,
});

export const removeIngredient = (ingredientKey) => ({
  type: actionTypes.REMOVE_INGREDIENT,
  ingredientKey: ingredientKey,
});

export const setIngredients = (ingredients) => ({
  type: actionTypes.SET_INGREDIENTS,
  ingredients: {
    bacon: ingredients.data.bacon,
    salad: ingredients.data.salad,
    cheese: ingredients.data.cheese,
    meat: ingredients.data.meat,
  },
});

export const fetchIngredientsFailed = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAILED,
});

export const initIngredients = () => (dispatch) =>
  axios
    .get(
      'https://hamburger-app-d3a32-default-rtdb.firebaseio.com/ingredients.json'
    )
    .then((response) => {
      dispatch(setIngredients(response));
    })
    .catch(() => dispatch(fetchIngredientsFailed()));
