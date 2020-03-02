const sleep = (deplay: number) => setTimeout(() => Promise.resolve(), deplay);

const correctUserName = 'guest';
const correctPassword = 'guest';

export interface Auth {
  isAuthenticated: boolean;
  authenticate: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const auth: Auth = {
  isAuthenticated: false,
  async authenticate(username: string, password: string) {
    await sleep(100);
    if (username === correctUserName && password === correctPassword) {
      auth.isAuthenticated = true;
    } else {
      auth.isAuthenticated = false;
      return Promise.reject();
    }
  },
  async signOut() {
    await sleep(100);
    auth.isAuthenticated = false;
  },
};

export default auth;
