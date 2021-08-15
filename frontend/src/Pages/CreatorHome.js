import React from "react";
import { Route, Switch } from "react-router";
import Creators from "../Creators/Creators";
import HeaderUser from "../Ui/HeaderUser";
import Mainpage from "./Mainpage";
const CreatorHome = () => {
  return (
    <React.Fragment>
      <HeaderUser />
      <Switch>
        <Route path="/home" component={Mainpage} />
        <Route path="/creators" component={Creators} />
        <Route path="/list">
          <Creators />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default CreatorHome;
