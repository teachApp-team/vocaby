import React from 'react';
import {Route, Switch} from "react-router";
import SignUp from "./templates/SignUp";
import SignIn from "./templates/SignIn";
import Top from "./templates/Top";
import Test from "./templates/Test";
import LevelShow from "./templates/LevelShow";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Auth>
        <Route exact path="/test" component={Test}/>
        <Route exact path="/top" component={Top}/>
        <Route exact path="/show" component={LevelShow}/>
      </Auth>
    </Switch>
  )
}

export default Router;
