import {
  SignInRequestAction,
  SignInSuccessAction,
  SignInFailAction,
  SignInCancelAction,
  SignOutRequestAction,
  SignOutSuccessAction,
  SignOutFailAction,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_CANCEL,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  Payload,
} from '../types';

export const signInRequest = ({
  username,
  password,
}: Payload): SignInRequestAction => ({
  type: SIGN_IN_REQUEST,
  username,
  password,
});

export const signInSuccess = (): SignInSuccessAction => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFail = (error: string): SignInFailAction => ({
  type: SIGN_IN_FAIL,
  error,
});

export const signInCancel = (): SignInCancelAction => ({
  type: SIGN_IN_CANCEL,
});

export const signOutRequest = (): SignOutRequestAction => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = (): SignOutSuccessAction => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFail = (error: string): SignOutFailAction => ({
  type: SIGN_OUT_FAIL,
  error,
});
