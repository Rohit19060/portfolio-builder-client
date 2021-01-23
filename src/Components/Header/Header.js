import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/login">LogIn</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <h1 className="text-center mb-3 mt-3">
          <Link to="/">Portfolio Builder</Link>
        </h1>
        <nav className="Header mb-3">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
