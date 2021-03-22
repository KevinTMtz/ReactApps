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
