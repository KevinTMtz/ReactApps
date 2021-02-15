import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (authData) => ({
  type: actionTypes.AUTH_SUCCESS,
  authData: authData,
});

export const authFailed = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error: error,
});

export const auth = (email, password, isSignUp) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaK6HLhKCmwk8Z_D37Lni4P97wJ0Ea8fA';

  if (!isSignUp) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaK6HLhKCmwk8Z_D37Lni4P97wJ0Ea8fA';
  }

  axios
    .post(url, authData)
    .then((response) => {
      dispatch(authSuccess(response.data));
    })
    .catch((error) => dispatch(authFailed(error)));
};
