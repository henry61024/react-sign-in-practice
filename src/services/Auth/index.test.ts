import auth from './index';

test('not authenticated at first', () => {
  expect(auth.isAuthenticated).toBe(false);
});

test('authenticate succeeded', async () => {
  await expect(auth.authenticate('guest', 'guest')).resolves.toBeUndefined();
  expect(auth.isAuthenticated).toBe(true);
});

test('authenticate failed', async () => {
  await expect(
    auth.authenticate('wrong name', 'wrong password')
  ).rejects.toBeUndefined();
  expect(auth.isAuthenticated).toBe(false);
});

test('sign out', async () => {
  await expect(auth.signOut()).resolves.toBeUndefined();
  expect(auth.isAuthenticated).toBe(false);
});
