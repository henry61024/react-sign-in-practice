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
    console.log('authenticate', username, password);
    await sleep(1000);
    if (username === correctUserName && password === correctPassword) {
      console.log('auth success');
      return Promise.resolve();
    } else {
      console.log('auth fail');
      return Promise.reject();
    }
  },
  async signOut() {
    await sleep(1000);
  },
};

export default auth;
