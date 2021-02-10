import * as actionTypes from './actionTypes';

export const saveResult = (result) => ({
  type: actionTypes.STORE_RESULT,
  result: result,
});

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 0);
  };
};

export const deleteResult = (index) => ({
  type: actionTypes.DELETE_RESULT,
  index: index,
});
