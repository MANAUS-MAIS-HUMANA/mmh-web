import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import Info from "../pages/info";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/info" component={Info} />}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
