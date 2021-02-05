const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + action.value };
    case DECREMENT:
      return { counter: state.counter - action.value };
    default:
      return state;
  }
};

export default reducer;
