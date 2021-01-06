import React from "react";
import local from "../api/local";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = { loginSucces: false };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
    };

    local
      .post("/login", data)
      .then((response) => {
        console.log("log in success!");
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("userid", response.headers.userid);
        this.setState({ loginSucces: true });
        this.props.children();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form=group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Username"
            onChange={(e) => (this.username = e.target.value)}
          />
        </div>
        <div className="form=group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>
        <button className="login-btn">Log in</button>
        {this.state.loginSucces ? <Redirect to="/" /> : ``}
      </form>
    );
  }
}

export default Login;
