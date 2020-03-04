export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';
export const SIGN_IN_CANCEL = 'SIGN_IN_CANCEL';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  username: string;
  password: string;
}

export interface SignInRequestPayloadAction {
  type: typeof SIGN_IN_REQUEST;
  payload: { username: string; password: string };
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
}

export interface SignInFailAction {
  error: any;
  type: typeof SIGN_IN_FAIL;
}

export interface SignInCancelAction {
  type: typeof SIGN_IN_CANCEL;
}

export interface SignOutRequestAction {
  type: typeof SIGN_OUT_REQUEST;
}

export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailAction {
  type: typeof SIGN_OUT_FAIL;
}

export const signIn = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): SignInRequestAction => {
  return {
    type: SIGN_IN_REQUEST,
    username,
    password,
  };
};

export const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS,
  };
};

export const signInFail = (error: string) => {
  return {
    type: SIGN_IN_FAIL,
    error,
  };
};

export const signInCancel = () => {
  return {
    type: SIGN_IN_CANCEL,
  };
};

export const signOut = () => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFail = () => {
  return {
    type: SIGN_OUT_FAIL,
  };
};

export interface OpenModalAction {
  type: 'OPEN_MODAL';
}

export interface CloseModalAction {
  type: 'CLOSE_MODAL';
}

export const openModal = () => ({
  type: 'OPEN_MODAL',
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
