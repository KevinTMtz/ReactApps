import * as actionTypes from './actionTypes';

export const increment = (value) => ({
  type: actionTypes.INCREMENT,
  value: value,
});

export const decrement = (value) => ({
  type: actionTypes.DECREMENT,
  value: value,
});
