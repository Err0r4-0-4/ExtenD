import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Creators from "./Creators/Creators";
import CreatorHome from "./Pages/CreatorHome";
import Full from "./Full/Full";
import CreatorProfile from './CreatorProfile/CreatorProfile';
import History from "./History/History";
import CreateMerch from './createMerch/createMerch';
import Merch from './Merch/Merch';
import Orders from './Orders/Orders'

function App() {

  useEffect(() => {
    document.title = "Extend"
  }, [])

  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={CreatorHome} />
          <Route path="/create" exact component={CreateMerch} />
          <Route path="/creators" exact component={Creators} />
          <Route path="/creatorProfile" exact component={CreatorProfile} />
          <Route path="/history" exact component={History} />
          <Route path="/merch" exact component={Merch} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/:id" exact component={Full} />
          {/* <Route path='/creator' exact component={Home}/> */}
        </Switch>
      </div>
    </div>

    // <Login />
  );
}

export default App;
