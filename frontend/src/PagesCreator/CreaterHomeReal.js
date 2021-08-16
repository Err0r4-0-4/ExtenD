import React from "react";
import { Route, Switch } from "react-router";
import styles from "./CreatorHome.module.css";
import CreatorProfile from "../CreatorProfile/CreatorProfile";
import Create from "../createMerch/createMerch";
import MainpageCreator from "./MainpageCreator";

const CreatorHome = () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/createrProfile" exact component={CreatorProfile} />
        <Route path="/create" exact component={Create} />
        {/* <Route path="/historyCreator" component={MainpageCreator} /> */}

        {/* <Route path="/creators" component={Creators} />
        <Route path="/history" exact component={History}>
          <Creators />
        </Route> */}
      </Switch>
    </div>
  );
};

export default CreatorHome;
