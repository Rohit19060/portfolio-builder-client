import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import "./Register.css";
export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then((user) => {
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <h2 className=" mb-3 mt-3">
            <Link to="/">Portfolio Builder</Link>
          </h2>
          <h1 className="mb-3 mt-3 col_theme">Register</h1>
          <div className="error-message">
            <p>{error}</p>
          </div>
          <div className="inputDiv">
            <label htmlFor="user_name">User </label>
            <input type="text" name="user_name" id="username" required />
          </div>
          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="on"
            />
          </div>
          <div className="text-center mb-3 mt-3">
            <Link to="/login" className="col_theme">
              Log in Instead
            </Link>
          </div>
          <div className="text-center mb-2">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
