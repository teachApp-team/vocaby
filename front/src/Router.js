import React from 'react';
import {Route, Switch} from "react-router";
import SignUp from "./templates/SignUp";
import SignIn from "./templates/SignIn";
import Top from "./templates/Top";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />

      <Auth>
        <Route exact path="/top" component={Top}/>
      </Auth>
    </Switch>
  )
}

export default Router;
