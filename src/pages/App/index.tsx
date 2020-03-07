import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRouter from '../../containers/PrivateRouter/';
import LoginPage from '../Login/';
import ProtectedPage from '../Protected/';
import PublicPage from '../Public/';
import AuthHeader from '../../containers/AuthHeader/';
import AppMenu from '../../containers/AppMenu';

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <AppMenu></AppMenu>
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/public">
          <PublicPage></PublicPage>
        </Route>
        <PrivateRouter path="/protected">
          <ProtectedPage></ProtectedPage>
        </PrivateRouter>
      </Switch>
    </div>
  );
};

export default App;
