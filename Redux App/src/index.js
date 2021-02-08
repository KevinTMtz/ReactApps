import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import counterReducer from './Store/Reducers/counter';
import resultReducer from './Store/Reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = (store) => (next) => (action) => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[Middleware] Next State', store.getState());
  return result;
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
