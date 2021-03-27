import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../Actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckState,
} from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchedOrdersSaga } from './order';

export function* watchAuth() {
  yield takeEvery(
    actionTypes.AUTH_CHECK_TIMEOUT,
    checkAuthTimeoutSaga
  );
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchedOrdersSaga);
}
