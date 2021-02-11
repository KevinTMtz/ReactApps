import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientKey) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientKey: ingredientKey,
  };
};

export const removeIngredient = (ingredientKey) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientKey: ingredientKey,
  };
};
