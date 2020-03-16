import formReducer from './signInForm';
import { OPEN_SIGN_IN_FORM, CLOSE_SIGN_IN_FORM } from '../types';

test('openSignInForm action with initialState returns isOpen true', () => {
  const newFormState = formReducer(undefined, { type: OPEN_SIGN_IN_FORM });
  expect(newFormState).toEqual({ isOpen: true });
});

test('openSignInForm action with isOpen false returns isOpen false', () => {
  const newFormState = formReducer(
    { isOpen: false },
    { type: OPEN_SIGN_IN_FORM }
  );
  expect(newFormState).toEqual({ isOpen: true });
});

test('openSignInForm action with isOpen true returns isOpen false', () => {
  const newFormState = formReducer(
    { isOpen: true },
    { type: OPEN_SIGN_IN_FORM }
  );
  expect(newFormState).toEqual({ isOpen: true });
});

test('closeSignInForm action with initialState returns isOpen false', () => {
  const newFormState = formReducer(undefined, { type: CLOSE_SIGN_IN_FORM });
  expect(newFormState).toEqual({ isOpen: false });
});

test('closeSignInForm action with isOpen true returns isOpen false', () => {
  const newFormState = formReducer(
    { isOpen: true },
    { type: CLOSE_SIGN_IN_FORM }
  );
  expect(newFormState).toEqual({ isOpen: false });
});

test('closeSignInForm action with isOpen false returns isOpen false', () => {
  const newFormState = formReducer(
    { isOpen: false },
    { type: CLOSE_SIGN_IN_FORM }
  );
  expect(newFormState).toEqual({ isOpen: false });
});
