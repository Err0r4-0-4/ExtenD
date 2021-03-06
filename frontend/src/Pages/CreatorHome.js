import React from "react";
import { Route, Switch } from "react-router";
import Creators from "../Creators/Creators";
import HeaderUser from "../Ui/HeaderUser";
import Mainpage from "./Mainpage";
import styles from "./CreatorHome.module.css";
import History from "../History/History";
import Footer from "../Ui/Footer";
const CreatorHome = () => {
  return (
    <div className={styles.App}>
      <HeaderUser />
      <Switch>
        <Route path="/home" component={Mainpage} />
        <Route path="/creators" component={Creators} />
        <Route path="/history" exact component={History}>
          <Creators />
        </Route>
      </Switch>
    </div>
  );
};

export default CreatorHome;
