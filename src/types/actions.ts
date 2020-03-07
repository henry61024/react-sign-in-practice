import { Action } from 'redux';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_IN_CANCEL = 'SIGN_IN_CANCEL';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';
export const OPEN_SIGN_IN_FORM = 'OPEN_SIGN_IN_FORM';
export const CLOSE_SIGN_IN_FORM = 'CLOSE_SIGN_IN_FORM';

export interface SignInRequestAction extends Action {
  type: typeof SIGN_IN_REQUEST;
  username: string;
  password: string;
}

export interface SignInSuccessAction extends Action {
  type: typeof SIGN_IN_SUCCESS;
}

export interface SignInFailAction extends Action {
  type: typeof SIGN_IN_FAIL;
  error: string;
}

export interface SignInCancelAction extends Action {
  type: typeof SIGN_IN_CANCEL;
}

export interface SignOutRequestAction extends Action {
  type: typeof SIGN_OUT_REQUEST;
}

export interface SignOutSuccessAction extends Action {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailAction extends Action {
  type: typeof SIGN_OUT_FAIL;
  error: string;
}

export type AuthActions =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailAction
  | SignInCancelAction
  | SignOutRequestAction
  | SignOutSuccessAction
  | SignOutFailAction;

export interface OpenSignInFormAction extends Action {
  type: typeof OPEN_SIGN_IN_FORM;
}

export interface CloseSignInFormAction extends Action {
  type: typeof CLOSE_SIGN_IN_FORM;
}

export type ModalActions = OpenSignInFormAction | CloseSignInFormAction;
