import React, { Component } from "react";
import Register from "../../Components/Register/Register";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <>
        <Register onRegistrationSuccess={this.handleRegistrationSuccess} />
      </>
    );
  }
}
