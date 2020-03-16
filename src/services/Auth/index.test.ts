import auth from './index';

test('authenticate succeeded', async () => {
  await expect(auth.authenticate('guest', 'guest')).resolves.toBeUndefined();
});

test('authenticate failed', async () => {
  await expect(auth.authenticate('wrong name', 'wrong password')).rejects.toBe(
    'Incorrect username or password.'
  );
});

test('sign out', async () => {
  await expect(auth.signOut()).resolves.toBeUndefined();
});
