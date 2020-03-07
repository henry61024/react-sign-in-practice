export const SIGN_IN_INITIAL_STATUS = 'signinInit';
export const SIGN_IN_ING_STATUS = 'signining';
export const SIGN_IN_SUCCESS_STATUS = 'signinSuccess';
export const SIGN_IN_FAIL_STATUS = 'signinFail';
export const SIGN_IN_CANCEL_STATUS = 'signinCancel';
export const SIGN_OUT_ING_STATUS = 'signouting';
export const SIGN_OUT_SUCCESS_STATUS = 'signoutSuccess';
export const SIGN_OUT_FAIL_STATUS = 'signoutFail';

export type AuthStatuses =
  | typeof SIGN_IN_INITIAL_STATUS
  | typeof SIGN_IN_ING_STATUS
  | typeof SIGN_IN_SUCCESS_STATUS
  | typeof SIGN_IN_FAIL_STATUS
  | typeof SIGN_IN_CANCEL_STATUS
  | typeof SIGN_OUT_ING_STATUS
  | typeof SIGN_OUT_SUCCESS_STATUS
  | typeof SIGN_OUT_FAIL_STATUS;

export interface AuthState {
  status: AuthStatuses;
  username?: string | null;
  password?: string | null;
  error?: string | null;
}

export interface SignInFormState {
  isOpen: boolean;
}

export interface State {
  auth: AuthState;
  signInForm: SignInFormState;
}
