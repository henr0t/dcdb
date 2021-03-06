import React from "react";
import filmapp from "../api/filmapp";

class NewUser extends React.Component {
  state = { createSuccess: false };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    filmapp
      .post("/api/v1/user/new/" + this.props.role, data)
      .then((response) => {
        this.setState({ createSuccess: true });
      })
      .catch((error) => console.log(error));
  };

  render() {
    var CreateForm = (
      <form className="new-user-form" onSubmit={this.handleSubmit}>
        <div className="form=group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
            ng-hide="true"
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            autoComplete="username"
            onChange={(e) => (this.username = e.target.value)}
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
        <button className="new-user-btn">Sign Up</button>
      </form>
    );

    var CreateSuccess = (
      <div>
        <p>Sign up success! Continue to log in</p>
      </div>
    );

    return (
      <React.Fragment>
        <div className="new-user">
          {this.state.createSuccess ? CreateSuccess : CreateForm}
        </div>
      </React.Fragment>
    );
  }
}

export default NewUser;
