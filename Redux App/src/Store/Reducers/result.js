import * as actionTypes from '../Actions/actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(action.result),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(
          (result, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};

export default reducer;
