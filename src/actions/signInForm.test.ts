import * as actions from './signInForm';
import { OPEN_SIGN_IN_FORM, CLOSE_SIGN_IN_FORM } from '../types';

test('openSignInForm creates OPEN_SIGN_IN_FORM action', () => {
  expect(actions.openSignInForm()).toEqual({
    type: OPEN_SIGN_IN_FORM,
  });
});

test('closeSignInForm creates CLOSE_SIGN_IN_FORM action', () => {
  expect(actions.closeSignInForm()).toEqual({
    type: CLOSE_SIGN_IN_FORM,
  });
});
