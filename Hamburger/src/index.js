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

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import burgerBuilderReducer from './Store/Reducers/burgerBuilder';
import orderReducer from './Store/Reducers/order';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

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
