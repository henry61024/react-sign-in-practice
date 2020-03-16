import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_CANCEL,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_IN_INITIAL_STATUS,
  SIGN_IN_ING_STATUS,
  SIGN_IN_SUCCESS_STATUS,
  SIGN_IN_FAIL_STATUS,
  SIGN_OUT_SUCCESS_STATUS,
  SIGN_OUT_ING_STATUS,
  SIGN_IN_CANCEL_STATUS,
  AuthActions,
  AuthState,
  SIGN_OUT_FAIL_STATUS,
} from '../types';

const initialState: AuthState = {
  status: SIGN_IN_INITIAL_STATUS,
  username: null,
  password: null,
};

const auth = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        status: SIGN_IN_ING_STATUS,
        username: action.username,
        password: action.password,
      };
    case SIGN_IN_SUCCESS:
      const isStateAccountLegal = !!(state.username && state.password);
      return {
        status: isStateAccountLegal
          ? SIGN_IN_SUCCESS_STATUS
          : SIGN_IN_FAIL_STATUS,
        username: state.username,
        password: state.password,
        error: isStateAccountLegal ? undefined : 'Illegal account',
      };
    case SIGN_IN_FAIL:
      return {
        status: SIGN_IN_FAIL_STATUS,
        username: state.username,
        password: state.password,
        error: action.error,
      };
    case SIGN_IN_CANCEL:
      return {
        status: SIGN_IN_CANCEL_STATUS,
        username: state.username,
        password: state.password,
      };
    case SIGN_OUT_REQUEST:
      return {
        status: SIGN_OUT_ING_STATUS,
        username: state.username,
        password: state.password,
      };
    case SIGN_OUT_SUCCESS:
      return {
        status: SIGN_OUT_SUCCESS_STATUS,
        username: null,
        password: null,
      };
    case SIGN_OUT_FAIL:
      return {
        status: SIGN_OUT_FAIL_STATUS,
        username: state.username,
        password: state.password,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
