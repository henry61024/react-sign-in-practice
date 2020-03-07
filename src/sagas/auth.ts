import { call, put, takeEvery, take, fork, cancel } from 'redux-saga/effects';
import {
  SignInRequestAction,
  SIGN_IN_REQUEST,
  SIGN_IN_CANCEL,
  SIGN_OUT_REQUEST,
} from '../types';
import history from '../history';
import auth from '../services/Auth';
import {
  signInSuccess,
  closeSignInForm,
  signInFail,
  signOutSuccess,
  signOutFail,
} from '../actions';

export function* watchRequestSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, signInRequest);
}

export function* signInRequest(action: SignInRequestAction) {
  const task = yield fork(signIn, action.username, action.password);
  yield take(SIGN_IN_CANCEL);
  yield put(closeSignInForm());
  yield cancel(task);
}

export function* signIn(username: string, password: string) {
  try {
    yield call(auth.authenticate, username, password);
    yield put(signInSuccess());
    yield put(closeSignInForm());
    history.push('/');
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* watchRequestSignOut() {
  yield takeEvery(SIGN_OUT_REQUEST, signOutRequest);
}

export function* signOutRequest() {
  try {
    yield call(auth.signOut);
    yield put(signOutSuccess());
    history.push('/');
  } catch (error) {
    yield put(signOutFail(error));
  }
}
