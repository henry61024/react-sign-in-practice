import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AnyObject, FORM_ERROR } from 'final-form';
import styled from 'styled-components';
import auth from '../../services/Auth';
import SignInForm from '../../components/SignInForm/';

const LoginContentDiv = styled.div`
  margin-bottom: 5px;
`;

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: '/' } };
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const signIn = async (values: AnyObject) => {
    try {
      await auth.authenticate(values.username, values.password);
      history.replace(from);
    } catch (e) {
      return { [FORM_ERROR]: 'Incorrect username or password.' };
    }
  };

  return (
    <div>
      <LoginContentDiv>
        You must sign in to view the page at /protected
      </LoginContentDiv>
      <button onClick={openModal}>Sign In</button>
      {isModalOpened && (
        <SignInForm onSignIn={signIn} onClose={closeModal}></SignInForm>
      )}
    </div>
  );
};

export default Login;
