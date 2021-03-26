import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import burgerBuilderReducer from './Store/Reducers/burgerBuilder';
import orderReducer from './Store/Reducers/order';
import authReducer from './Store/Reducers/auth';
import { watchAuth, watchBurgerBuilder } from './Store/Sagas/index';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
