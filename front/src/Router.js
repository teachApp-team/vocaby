import React from 'react';
import {Route, Switch} from "react-router";
import SignUp from "./templates/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  )
}

export default Router;
