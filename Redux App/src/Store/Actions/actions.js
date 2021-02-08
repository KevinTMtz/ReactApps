export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = (value) => ({
  type: INCREMENT,
  value: value,
});

export const decrement = (value) => ({
  type: DECREMENT,
  value: value,
});

export const storeResult = (result) => ({
  type: STORE_RESULT,
  result: result,
});

export const deleteResult = (index) => ({
  type: DELETE_RESULT,
  index: index,
});
