import { put, delay } from 'redux-saga/effects';

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
