import { watchRequestSignIn, watchRequestSignOut } from './auth';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchRequestSignIn(), watchRequestSignOut()]);
}
