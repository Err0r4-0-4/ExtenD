import React from "react";
import { Route, Switch } from "react-router";
import styles from "./CreatorHome.module.css";
import CreatorProfile from "../CreatorProfile/CreatorProfile";
const CreatorHome = () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/createrProfile" component={CreatorProfile} />
        {/* <Route path="/creators" component={Creators} />
        <Route path="/history" exact component={History}>
          <Creators />
        </Route> */}
      </Switch>
    </div>
  );
};

export default CreatorHome;
