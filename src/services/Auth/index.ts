const sleep = (delay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, delay));

const correctUserName = 'guest';
const correctPassword = 'guest';

export interface Auth {
  authenticate: (username: string, password: string) => Promise<string | void>;
  signOut: () => Promise<void>;
}

const auth: Auth = {
  async authenticate(username: string, password: string) {
    await sleep(1000);
    if (username === correctUserName && password === correctPassword) {
      return Promise.resolve();
    } else {
      return Promise.reject('Incorrect username or password.');
    }
  },
  async signOut() {
    await sleep(1000);
  },
};

export default auth;
