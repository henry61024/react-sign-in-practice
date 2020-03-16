import React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FORM_ERROR, SubmissionErrors, FormApi } from 'final-form';
import MakeAsyncFunction from 'react-redux-promise-listener';
import SignInForm from '../../components/SignInForm';
import store, { promiseListener } from '../../store';
import { openSignInForm, signInCancel, closeSignInForm } from '../../actions';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SignInFailAction,
  State,
  Payload,
  SIGN_IN_ING_STATUS,
} from '../../types';
import { AnyObject } from 'react-final-form';

const LoginContentDiv = styled.div`
  margin-bottom: 5px;
`;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // MakeAsyncFunction will dispatch signin action, so no need to dispatch ourselves
  openSignInForm: () => dispatch(openSignInForm()),
  cancelSignIn: () => {
    const isSignIning = store.getState().auth.status === SIGN_IN_ING_STATUS;
    const cancel = isSignIning ? signInCancel : closeSignInForm;
    return dispatch(cancel());
  },
});

const mapStateToProps = (state: State): { isFormOpened: boolean } => ({
  isFormOpened: state.signInForm.isOpen,
});

type AsyncSignIn = (
  payload: Payload,
  form: FormApi<object>
) => Promise<SubmissionErrors>;

const asyncSignInResolver = (asyncSignIn: AsyncSignIn) => (
  payload: AnyObject,
  form: FormApi
) => asyncSignIn(payload as Payload, form).catch(mapToFormError);

const mapToFormError = ({ error }: { error: string }) => ({
  [FORM_ERROR]: error,
});

const setAsyncFunctionPayload = (action: Action, payload: AnyObject) => ({
  ...action,
  ...payload,
});

interface LoginProps {
  // MakeAsyncFunction will dispatch signin action, so no need to add signin prop
  isFormOpened: boolean;
  openSignInForm: () => {};
  cancelSignIn: () => {};
}

export const Login: React.FC<LoginProps> = ({
  isFormOpened,
  openSignInForm,
  cancelSignIn,
}) => (
  <div>
    <LoginContentDiv>
      You must sign in to view the page at /protected
    </LoginContentDiv>
    <button onClick={openSignInForm}>Sign In</button>
    {isFormOpened && (
      <MakeAsyncFunction
        listener={promiseListener}
        start={SIGN_IN_REQUEST}
        resolve={SIGN_IN_SUCCESS}
        reject={SIGN_IN_FAIL}
        setPayload={setAsyncFunctionPayload}
        getError={(action: SignInFailAction) => ({ error: action.error })}
      >
        {(asyncSignIn: AsyncSignIn) => (
          <SignInForm
            onSignIn={asyncSignInResolver(asyncSignIn)}
            onClose={cancelSignIn}
          ></SignInForm>
        )}
      </MakeAsyncFunction>
    )}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
