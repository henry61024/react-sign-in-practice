import {
  OpenSignInFormAction,
  CloseSignInFormAction,
  OPEN_SIGN_IN_FORM,
  CLOSE_SIGN_IN_FORM,
} from '../types';

export const openSignInForm = (): OpenSignInFormAction => ({
  type: OPEN_SIGN_IN_FORM,
});

export const closeSignInForm = (): CloseSignInFormAction => ({
  type: CLOSE_SIGN_IN_FORM,
});
