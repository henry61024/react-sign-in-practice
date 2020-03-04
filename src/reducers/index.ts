import { combineReducers } from 'redux';
import {
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  OPEN_MODAL,
  CLOSE_MODAL,
  SignOutRequestAction,
  OpenModalAction,
  CloseModalAction,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SignInRequestAction,
  SignInSuccessAction,
  SignInFailAction,
  SIGN_IN_FAIL,
  SignOutSuccessAction,
  SignOutFailAction,
  SIGN_IN_CANCEL,
  SignInCancelAction,
} from '../actions';

const initAuthState = {
  status: '',
  username: null,
  password: null,
};

const auth = (
  state = initAuthState,
  action:
    | SignInRequestAction
    | SignInSuccessAction
    | SignInFailAction
    | SignInCancelAction
    | SignOutRequestAction
    | SignOutSuccessAction
    | SignOutFailAction
) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        status: 'signining',
        username: action.username,
        password: action.password,
      };
    case SIGN_IN_SUCCESS:
      return {
        status: 'signinSuccess',
        username: state.username,
        password: state.password,
      };
    case SIGN_IN_FAIL:
      return {
        status: 'signinFail',
        error: action.error,
        username: state.username,
        password: state.password,
      };
    case SIGN_IN_CANCEL:
      return {
        status: 'signinCancel',
      };
    case SIGN_OUT_REQUEST:
      return {
        status: 'signouting',
        username: state.username,
        password: state.password,
      };
    case SIGN_OUT_SUCCESS:
      return {
        status: 'signoutSuccess',
        username: null,
        password: null,
      };
    case SIGN_OUT_FAIL:
      return {
        status: 'signoutFail',
        username: state.username,
        password: state.password,
      };
    default:
      return state;
  }
};

const modal = (state = false, action: OpenModalAction | CloseModalAction) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  modal,
});
