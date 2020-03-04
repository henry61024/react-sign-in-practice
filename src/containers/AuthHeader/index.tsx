import React from 'react';
import GuestHeader from '../../components/GuestHeader';
import UserHeader from '../../components/UserHeader';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut()),
});

const mapStateToProps = (state: any): { isAuthenticated: boolean } => ({
  isAuthenticated:
    state.auth.status === 'signinSuccess' || state.auth.status === 'signouting',
});

const AuthHeader: React.FC<{ isAuthenticated: boolean; signOut: any }> = ({
  isAuthenticated,
  signOut,
}) => {
  return isAuthenticated ? (
    <UserHeader onSignOut={signOut}></UserHeader>
  ) : (
    <GuestHeader></GuestHeader>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
