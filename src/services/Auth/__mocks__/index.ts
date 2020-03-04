import { Auth } from '../index';
const sleep = (delay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, delay));

const auth: any = jest.genMockFromModule('../index.ts');
let mockedUserName: string;
let mockedPassword: string;

export interface MockedAuth extends Auth {
  __setAuthInfo: (username: string, password: string) => void;
}

const __setAuthInfo = (username: string, password: string) => {
  mockedUserName = username;
  mockedPassword = password;
};

const authenticate = async (username: string, password: string) => {
  await sleep(100);
  if (username === mockedUserName && password === mockedPassword) {
    auth.isAuthenticated = true;
  } else {
    auth.isAuthenticated = false;
    return Promise.reject();
  }
};

const signOut = async () => {
  await sleep(100);
  auth.isAuthenticated = false;
};

auth.__setAuthInfo = __setAuthInfo;
auth.authenticate = authenticate;
auth.signOut = signOut;

export default auth;
