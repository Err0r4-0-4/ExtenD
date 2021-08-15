import React from "react";
import { Route, Switch } from "react-router";
import Creators from "../Creators/Creators";
import HeaderUser from "../Ui/HeaderUser";
import Mainpage from "./Mainpage";
import styles from "./CreatorHome.module.css";
const CreatorHome = () => {
  return (
    <div className={styles.App}>
      <HeaderUser />
      <Switch>
        <Route path="/home" component={Mainpage} />
        <Route path="/creators" component={Creators} />
        <Route path="/list">
          <Creators />
        </Route>
      </Switch>
    </div>
  );
};

export default CreatorHome;
