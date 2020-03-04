import { watchRequestSignIn, watchRequestSignOut } from './signin';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([watchRequestSignIn(), watchRequestSignOut()]);
}
