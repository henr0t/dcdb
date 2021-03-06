import "./Login.css";
import React from "react";
import filmapp from "../api/filmapp";
import { Redirect } from "react-router-dom";
import AuthContext from "./AuthContext.js";

class Login extends React.Component {
  state = { loginSucces: false };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
    };

    filmapp
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("userid", response.headers.userid);
        this.setState({ loginSucces: true });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ login }) => (
          <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <div className="form=group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={(e) => (this.username = e.target.value)}
                  ng-hide="true"
                  required
                />
              </div>
              <div className="form=group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => (this.password = e.target.value)}
                  required
                />
              </div>
              <button className="login-btn" onClick={login}>
                Log In
              </button>
              {this.state.loginSucces ? <Redirect to="/" /> : ``}
            </form>
          </React.Fragment>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
