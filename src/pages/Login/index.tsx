import React from 'react';
import { connect } from 'react-redux';
import {
  signIn,
  openModal,
  closeModal,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  signInCancel,
} from '../../actions/';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener';
import SignInForm from '../../components/SignInForm/';
import { promiseListener } from '../..';
import {
  Config,
  FORM_ERROR,
  SubmissionErrors,
  FormApi,
  AnyObject,
} from 'final-form';

const LoginContentDiv = styled.div`
  margin-bottom: 5px;
`;

const mapDispatchToProps = (dispatch: any) => ({
  signIn: ({ username, password }: any) =>
    dispatch(signIn({ username, password })),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(signInCancel()),
});

const mapStateToProps = (state: any): { isModalOpened: boolean } => ({
  isModalOpened: state.modal,
});

interface LoginProps {
  isModalOpened: boolean;
  signIn: (values: object) => {};
  openModal: () => {};
  closeModal: () => {};
}

const Login: React.FC<LoginProps> = ({
  isModalOpened,
  signIn,
  openModal,
  closeModal,
}) => {
  return (
    <div>
      <LoginContentDiv>
        You must sign in to view the page at /protected
      </LoginContentDiv>
      <button onClick={openModal}>Sign In</button>
      {console.log('signIn', signIn)}
      {isModalOpened && (
        <MakeAsyncFunction
          listener={promiseListener}
          start={SIGN_IN_REQUEST}
          resolve={SIGN_IN_SUCCESS}
          reject={SIGN_IN_FAIL}
          // TODO: setPayload & getPayload
          getError={(action: AnyObject) => ({ error: action.error })}
        >
          {(
            asyncSignIn: (
              payload: object,
              form: FormApi<object>
            ) => Promise<SubmissionErrors>
          ) => (
            <SignInForm
              onSignIn={(payload, form) =>
                asyncSignIn(payload, form).catch(
                  ({ error }: { error: string }) => {
                    console.log('get auth error', error, FORM_ERROR);
                    return {
                      [FORM_ERROR]: error,
                    };
                  }
                )
              }
              onClose={closeModal}
            ></SignInForm>
          )}
        </MakeAsyncFunction>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
