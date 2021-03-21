import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken: token,
  userId: userId,
});

export const logout = () => ({
  type: actionTypes.AUTH_INITIATE_LOGOUT,
});

export const logoutSucceed = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const authFailed = (error) => ({
  type: actionTypes.AUTH_FAILED,
  error: error,
});

export const checkAuthTimeout = (expirationTime) => ({
  type: actionTypes.AUTH_CHECK_TIMEOUT,
  expirationTime: expirationTime,
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
      const expirationDate = new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('userId', response.data.localId);

      dispatch(
        authSuccess(response.data.idToken, response.data.localId)
      );
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch((error) =>
      dispatch(authFailed(error.response.data.error))
    );
};

export const setAuthRedirectPath = (path) => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path: path,
});

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    const userId = localStorage.getItem('userId');
    const expirationTime = new Date(
      localStorage.getItem('expirationDate')
    );
    if (expirationTime > new Date()) {
      dispatch(authSuccess(token, userId));
      dispatch(
        checkAuthTimeout(
          (expirationTime.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      dispatch(logout());
    }
  }
};
