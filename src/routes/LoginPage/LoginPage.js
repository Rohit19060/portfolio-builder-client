import React, { Component } from "react";
import Signin from "../../Components/Signin/Signin";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <>
        <Signin onLoginSuccess={this.handleLoginSuccess} />
      </>
    );
  }
}
