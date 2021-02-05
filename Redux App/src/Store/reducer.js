const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const STORE_RESULT = 'STORE_RESULT';
const DELETE_RESULT = 'DELETE_RESULT';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.value };
    case DECREMENT:
      return { ...state, counter: state.counter - action.value };
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(state.counter),
      };
    case DELETE_RESULT:
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
