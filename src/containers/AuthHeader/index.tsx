import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../../services/Auth/';
import GuestHeader from '../../components/GuestHeader';
import UserHeader from '../../components/UserHeader';

const AuthHeader: React.FC = () => {
  const history = useHistory();
  const signOut = async () => {
    await auth.signOut();
    history.push('/');
  };

  return auth.isAuthenticated ? (
    <UserHeader onSignOut={signOut}></UserHeader>
  ) : (
    <GuestHeader></GuestHeader>
  );
};

export default AuthHeader;
