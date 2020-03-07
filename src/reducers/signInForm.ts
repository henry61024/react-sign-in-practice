import {
  OPEN_SIGN_IN_FORM,
  CLOSE_SIGN_IN_FORM,
  SignInFormState,
  ModalActions,
} from '../types';

const initialState: SignInFormState = {
  isOpen: false,
};

const signInForm = (
  state: SignInFormState = initialState,
  action: ModalActions
): SignInFormState => {
  switch (action.type) {
    case OPEN_SIGN_IN_FORM:
      return { isOpen: true };
    case CLOSE_SIGN_IN_FORM:
      return { isOpen: false };
    default:
      return state;
  }
};

export default signInForm;
