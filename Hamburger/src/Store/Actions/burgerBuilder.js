import * as actionTypes from './actionTypes';

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
    bacon: ingredients.bacon,
    salad: ingredients.salad,
    cheese: ingredients.cheese,
    meat: ingredients.meat,
  },
});

export const fetchIngredientsFailed = (error) => ({
  type: actionTypes.FETCH_INGREDIENTS_FAILED,
  error: error,
});

export const initIngredients = () => ({
  type: actionTypes.INIT_INGREDIENTS,
});
