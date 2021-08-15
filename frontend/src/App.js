import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Creators from "./Creators/Creators";
import CreatorHome from "./Pages/CreatorHome";
import Full from "./Full/Full";
import CreatorProfile from './CreatorProfile/CreatorProfile'

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={CreatorHome} />
          <Route path="/creators" exact component={Creators} />
          <Route path="/creatorProfile" exact component={CreatorProfile} />
          <Route path="/:id" exact component={Full} />
          {/* <Route path='/creator' exact component={Home}/> */}
        </Switch>
      </div>
    </div>

    // <Login />
  );
}

export default App;
