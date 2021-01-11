import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import "./Signin.css";
class Signin extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <form className="RegistrationForm" onSubmit={this.handleSubmitJwtAuth}>
          <h1 className=" mb-3 mt-3">
            <Link to="/">Portfolio Builder</Link>
          </h1>
          <h1 className="mb-3 mt-3 col_theme">Log In</h1>
          <div className="error-message">{error && <p>{error.message}</p>}</div>
          <div className="inputdiv">
            <label htmlFor="user_name">User </label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="inputdiv">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="text-center mb-3 mt-3">
            <Link to="/register" className="col_theme">
              Register Instead
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
export default Signin;
