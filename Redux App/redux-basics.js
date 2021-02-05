const redux = require('redux');
const createStore = redux.createStore;

const INC_COUNTER = 'INC_COUNTER';
const ADD_COUNTER = 'ADD_COUNTER';

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === INC_COUNTER) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  if (action.type === ADD_COUNTER) {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }

  return state;
};

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log('[Subscription]', store.getState())
);

store.dispatch({ type: INC_COUNTER, value: 1 });
store.dispatch({ type: ADD_COUNTER, value: 10 });
