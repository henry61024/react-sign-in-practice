import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: any): { isAuthenticated: boolean } => ({
  isAuthenticated:
    state.auth.status === 'signinSuccess' || state.auth.status === 'signouting',
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
