import React from "react";
import local from "../api/local";

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
    };

    local
      .post("/login", data)
      .then((res) => {
        console.log("log in success!");
        localStorage.setItem("token", res.headers.authorization);
        localStorage.setItem("userid", res.headers.userid);
      })
      .catch((err) => console.log(err));
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
      </form>
    );
  }
}

export default Login;
