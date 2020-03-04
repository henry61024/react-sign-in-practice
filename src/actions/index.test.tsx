import * as actions from './index';

test('signIn creates SIGN_IN action with account infos', () => {
  expect(actions.signIn({ username: 'test', password: 'test' })).toEqual({
    type: 'SIGN_IN',
    username: 'test',
    password: 'test',
  });
});

test('signOut creates SIGN_OUT action', () => {
  expect(actions.signOut()).toEqual({
    type: 'SIGN_OUT',
  });
});

test('openModal creates OPEN_MODAL action', () => {
  expect(actions.openModal()).toEqual({
    type: 'OPEN_MODAL',
  });
});

test('closeModal creates CLOSE_MODAL action', () => {
  expect(actions.closeModal()).toEqual({
    type: 'CLOSE_MODAL',
  });
});
