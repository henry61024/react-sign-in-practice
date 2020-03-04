const sleep = (delay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, delay));

const correctUserName = 'guest';
const correctPassword = 'guest';

export interface Auth {
  authenticate: (...args: any[]) => any;
  signOut: () => Promise<void>;
}

const auth: Auth = {
  async authenticate(username: string, password: string) {
    await sleep(1000);
    if (username === correctUserName && password === correctPassword) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  async signOut() {
    await sleep(1000);
  },
};

export default auth;
