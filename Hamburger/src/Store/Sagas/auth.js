import { put, delay } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../Actions/index';

export function* logoutSaga() {
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');

  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());

  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };

  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBaK6HLhKCmwk8Z_D37Lni4P97wJ0Ea8fA';

  if (!action.isSignUp) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBaK6HLhKCmwk8Z_D37Lni4P97wJ0Ea8fA';
  }

  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);

    yield put(
      actions.authSuccess(
        response.data.idToken,
        response.data.localId
      )
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFailed(error.response.data.error));
  }
}

export function* authCheckState() {
  const token = yield localStorage.getItem('token');

  if (!token) {
    yield put(actions.logout());
  } else {
    const userId = yield localStorage.getItem('userId');
    const expirationTime = yield new Date(
      localStorage.getItem('expirationDate')
    );

    if (expirationTime > new Date()) {
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expirationTime.getTime() - new Date().getTime()) / 1000
        )
      );
    } else {
      yield put(actions.logout());
    }
  }
}
