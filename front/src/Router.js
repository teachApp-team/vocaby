import React from 'react';
import {Route, Switch} from "react-router";
import SignUp from "./templates/SignUp";
import SignIn from "./templates/SignIn";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  )
}

export default Router;
