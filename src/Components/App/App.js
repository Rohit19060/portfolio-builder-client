import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import Getstarted from "../GetStarted/GetStarted";
import Homepage from "../Homepage/Homepage";
import HowToUse from "../HowToUse/HowToUse";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import StaticContainer from "../../routes/StaticContainer/StaticContainer";
import "./App.css";
export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    return (
      <>
        {this.state.hasError && (
          <p className="red">There was an error! Oh no!</p>
        )}
        <Switch>
          <PrivateRoute path={"/templates/:id"} component={StaticContainer} />
          <PrivateRoute path={"/get-started"} component={Getstarted} />
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/howtouse"} component={HowToUse} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
