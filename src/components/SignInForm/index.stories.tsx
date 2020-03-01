import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import SignInForm from './index';
import '../../index.css';
import { FORM_ERROR } from 'final-form';

export default {
  title: 'Components/SignInForm',
  component: SignInForm,
  decorators: [withA11y],
};

const signIn = (values: any) => {
  if (values.username !== 'guest' || values.password !== 'guest') {
    return { [FORM_ERROR]: 'Incorrect username or password.' };
  }
  window.alert('LOGIN SUCCESS!');
};

export const Form = () => (
  <SignInForm onSignIn={signIn} onClose={action('on-close')}></SignInForm>
);
