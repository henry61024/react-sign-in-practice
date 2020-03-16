import authReducer from './auth';
import {
  SIGN_IN_INITIAL_STATUS,
  SIGN_IN_REQUEST,
  SIGN_IN_CANCEL_STATUS,
  SIGN_IN_SUCCESS,
  SIGN_IN_ING_STATUS,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS_STATUS,
  SIGN_IN_FAIL_STATUS,
  SIGN_IN_CANCEL,
  SIGN_OUT_REQUEST,
  SIGN_OUT_ING_STATUS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_OUT_FAIL_STATUS,
  SIGN_OUT_SUCCESS_STATUS,
} from '../types';

test('signInRequest action with initialState returns action account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_IN_REQUEST, username: 'test', password: 'test' }
  );
  expect(newState).toEqual({
    status: SIGN_IN_ING_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signInRequest action with existing state returns action account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_CANCEL_STATUS, username: 'old', password: 'old' },
    { type: SIGN_IN_REQUEST, username: 'test', password: 'test' }
  );
  expect(newState).toEqual({
    status: SIGN_IN_ING_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signInSuccess action with initialState returns SIGN_IN_FAIL_STATUS', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_IN_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_IN_FAIL_STATUS,
    username: null,
    password: null,
    error: 'Illegal account',
  });
});

test('signInSuccess action with empty state username returns SIGN_IN_FAIL_STATUS', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: null, password: 'test' },
    { type: SIGN_IN_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_IN_FAIL_STATUS,
    username: null,
    password: 'test',
    error: 'Illegal account',
  });
});

test('signInSuccess action with empty state password returns SIGN_IN_FAIL_STATUS', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: 'test', password: null },
    { type: SIGN_IN_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_IN_FAIL_STATUS,
    username: 'test',
    password: null,
    error: 'Illegal account',
  });
});

test('signInSuccess action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: 'test', password: 'test' },
    { type: SIGN_IN_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_IN_SUCCESS_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signInFail action with initialState returns null account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_IN_FAIL, error: 'wrong account info' }
  );
  expect(newState).toEqual({
    status: SIGN_IN_FAIL_STATUS,
    username: null,
    password: null,
    error: 'wrong account info',
  });
});

test('signInFail action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: 'wrong', password: 'wrong' },
    { type: SIGN_IN_FAIL, error: 'wrong account info' }
  );
  expect(newState).toEqual({
    status: SIGN_IN_FAIL_STATUS,
    username: 'wrong',
    password: 'wrong',
    error: 'wrong account info',
  });
});

test('signInCancel action with initialState returns null account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: 'test', password: 'test' },
    { type: SIGN_IN_CANCEL }
  );
  expect(newState).toEqual({
    status: SIGN_IN_CANCEL_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signInCancel action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_ING_STATUS, username: 'test', password: 'test' },
    { type: SIGN_IN_CANCEL }
  );
  expect(newState).toEqual({
    status: SIGN_IN_CANCEL_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signOutRequest action with initialState returns null account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_OUT_REQUEST }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_ING_STATUS,
    username: null,
    password: null,
  });
});

test('signOutRequest action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_SUCCESS_STATUS, username: 'test', password: 'test' },
    { type: SIGN_OUT_REQUEST }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_ING_STATUS,
    username: 'test',
    password: 'test',
  });
});

test('signOutSuccess action with initialState returns null account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_OUT_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_SUCCESS_STATUS,
    username: null,
    password: null,
  });
});

test('signOutSuccess action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_SUCCESS_STATUS, username: 'test', password: 'test' },
    { type: SIGN_OUT_SUCCESS }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_SUCCESS_STATUS,
    username: null,
    password: null,
  });
});

test('signOutFail action with initialState returns null account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_INITIAL_STATUS, username: null, password: null },
    { type: SIGN_OUT_FAIL, error: 'sign out failed' }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_FAIL_STATUS,
    username: null,
    password: null,
    error: 'sign out failed',
  });
});

test('signOutFail action with existing state returns existing state account info', () => {
  const newState = authReducer(
    { status: SIGN_IN_SUCCESS_STATUS, username: 'test', password: 'test' },
    { type: SIGN_OUT_FAIL, error: 'sign out failed' }
  );
  expect(newState).toEqual({
    status: SIGN_OUT_FAIL_STATUS,
    username: 'test',
    password: 'test',
    error: 'sign out failed',
  });
});
