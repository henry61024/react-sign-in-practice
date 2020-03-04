import { call, put, takeEvery, take, fork, cancel } from 'redux-saga/effects';
import history from '../history';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SignInRequestAction,
  SignOutRequestAction,
  CLOSE_MODAL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_OUT_REQUEST,
  SignInRequestPayloadAction,
  SIGN_IN_CANCEL,
} from '../actions';

import auth from '../services/Auth';

export function* watchRequestSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, signIn);
}

export function* _signIn({ type, payload }: SignInRequestPayloadAction) {
  try {
    console.log('signin', auth.authenticate);
    const response = yield call(
      auth.authenticate,
      payload.username,
      payload.password
    );
    yield put({
      type: SIGN_IN_SUCCESS,
      response,
    });
    yield put({ type: CLOSE_MODAL });
    console.log('history', history);
    // FIXME: use location from to redirect back
    history.push('/');
  } catch (error) {
    console.log('catch auth error');
    yield put({
      type: SIGN_IN_FAIL,
      error: 'Incorrect username or password.',
    });
  }
}

export function* signIn(action: SignInRequestPayloadAction) {
  const task = yield fork(_signIn, action);
  yield take(SIGN_IN_CANCEL);
  yield put({ type: CLOSE_MODAL });
  yield cancel(task);
}

export function* watchRequestSignOut() {
  yield takeEvery(SIGN_OUT_REQUEST, signOut);
}

export function* signOut({ type }: SignOutRequestAction) {
  try {
    console.log('signin', auth.signOut);
    const response = yield call(auth.signOut);
    yield put({
      type: SIGN_OUT_SUCCESS,
      response,
    });
    console.log('history', history);
    // FIXME: use location from to redirect back
    history.push('/');
  } catch (error) {
    yield put({
      type: SIGN_OUT_FAIL,
      error: 'Incorrect username or password.',
    });
  }
}
