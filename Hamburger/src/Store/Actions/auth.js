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

export const auth = (email, password, isSignUp) => ({
  type: actionTypes.AUTH_USER,
  email: email,
  password: password,
  isSignUp: isSignUp,
});

export const setAuthRedirectPath = (path) => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path: path,
});

export const authCheckState = () => ({
  type: actionTypes.AUTH_CHECK_STATE,
});
