import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import GuestHeader from '../../components/GuestHeader';
import UserHeader from '../../components/UserHeader';
import { signOutRequest } from '../../actions';
import {
  SIGN_OUT_ING_STATUS,
  SIGN_IN_SUCCESS_STATUS,
  State,
  AnyFunction,
} from '../../types';

interface AuthHeaderProps {
  isAuthenticated: boolean;
  signOut: AnyFunction;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOut: () => dispatch(signOutRequest()),
});

const mapStateToProps = (state: State): { isAuthenticated: boolean } => ({
  isAuthenticated:
    state.auth.status === SIGN_IN_SUCCESS_STATUS ||
    state.auth.status === SIGN_OUT_ING_STATUS,
});

const AuthHeader: React.FC<AuthHeaderProps> = ({ isAuthenticated, signOut }) =>
  isAuthenticated ? (
    <UserHeader onSignOut={signOut}></UserHeader>
  ) : (
    <GuestHeader></GuestHeader>
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
