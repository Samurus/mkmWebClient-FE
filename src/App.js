import AccountComponent from "./components/AccountComponent";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import UploadComponent from "./components/UploadComponent";

function App() {
  return (
    <div id={"App"}>
        <Switch>
            <Route path={"/"} exact><Redirect to={"/account"} /></Route>
            <Route path={"/account"} exact component={AccountComponent}/>
            <Route path={"/upload"} exact component={UploadComponent}/>
        </Switch>
    </div>
  );
}

export default App;
