import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { SIGN_IN_SUCCESS_STATUS, SIGN_OUT_ING_STATUS } from '../../types';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any): { isAuthenticated: boolean } => ({
  isAuthenticated:
    state.auth.status === SIGN_IN_SUCCESS_STATUS ||
    state.auth.status === SIGN_OUT_ING_STATUS,
});

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
