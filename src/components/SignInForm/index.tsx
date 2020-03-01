import '@trendmicro/react-modal/dist/react-modal.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import styled from 'styled-components';
import Modal from '@trendmicro/react-modal';
import { Button } from '@trendmicro/react-buttons';
import { Form, Field } from 'react-final-form';
import { Config } from 'final-form';

const FormGroup = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 5px 12px;
  font-size: 13px;
  color: #222222;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 3px;
`;

const Error = styled.div`
  display: block;
  color: #db3d44;
  margin-top: 4px;
`;

const required = (value: any) =>
  value ? undefined : 'This is a required field.';

interface SignInFormProps<FormValues = object, SubmissionErrors = object> {
  onSignIn: Config['onSubmit'];
  onClose: Function;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignIn, onClose }) => (
  <Modal onClose={onClose}>
    <Form
      onSubmit={onSignIn}
      render={({
        handleSubmit,
        submitting,
        hasValidationErrors,
        submitError,
      }) => (
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Field name="username" validate={required}>
              {({ input, meta }) => (
                <FormGroup>
                  <label htmlFor="username">Username</label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    {...input}
                  />
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </FormGroup>
              )}
            </Field>
            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <FormGroup>
                  <label htmlFor="password">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    {...input}
                  />
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </FormGroup>
              )}
            </Field>
            {submitError && <Error>{submitError}</Error>}
          </Modal.Body>
          <Modal.Footer>
            <Button btnStyle="flat" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              btnStyle="primary"
              disabled={submitting || hasValidationErrors}
            >
              Sign In
            </Button>
          </Modal.Footer>
        </form>
      )}
    ></Form>
  </Modal>
);

export default SignInForm;
