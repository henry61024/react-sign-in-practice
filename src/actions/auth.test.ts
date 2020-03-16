import * as actions from './auth';
import {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_CANCEL,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
} from '../types';

test('signInRequest creates SIGN_IN action with account infos', () => {
  expect(actions.signInRequest({ username: 'test', password: 'test' })).toEqual(
    {
      type: SIGN_IN_REQUEST,
      username: 'test',
      password: 'test',
    }
  );
});

test('signInSuccess creates SIGN_IN_SUCCESS action', () => {
  expect(actions.signInSuccess()).toEqual({
    type: SIGN_IN_SUCCESS,
  });
});

test('signInFail creates SIGN_IN_FAIL action', () => {
  expect(actions.signInFail('wrong account info')).toEqual({
    type: SIGN_IN_FAIL,
    error: 'wrong account info',
  });
});

test('signInCancel creates SIGN_IN_CANCEL action', () => {
  expect(actions.signInCancel()).toEqual({
    type: SIGN_IN_CANCEL,
  });
});

test('signOutRequest creates SIGN_OUT action', () => {
  expect(actions.signOutRequest()).toEqual({
    type: SIGN_OUT_REQUEST,
  });
});

test('signOutSuccess creates SIGN_OUT action', () => {
  expect(actions.signOutSuccess()).toEqual({
    type: SIGN_OUT_SUCCESS,
  });
});

test('signOutFail creates SIGN_OUT action', () => {
  expect(actions.signOutFail('sign out failed')).toEqual({
    type: SIGN_OUT_FAIL,
    error: 'sign out failed',
  });
});
