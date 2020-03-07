import { combineReducers } from 'redux';
import auth from './auth';
import signInForm from './signInForm';

export default combineReducers({
  auth,
  signInForm,
});
