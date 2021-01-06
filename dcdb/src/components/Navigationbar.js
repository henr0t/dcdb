import React from "react";
import { Link } from "react-router-dom";
import local from "../api/local";

class Navigationbar extends React.Component {
  state = { user: null };

  requestUserData() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      local
        .get("/api/v1/user/" + localStorage.getItem("userid"))
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.setState({ user: response.data });
          console.log(this.state.user);
        })
        .catch((error) => console.log(error));
    }
  }

  componentDidMount() {
    this.requestUserData();
  }

  render() {
    return (
      <div className="navbar-placeholder">
        <Link to={"/"}>Home</Link>
        {this.state.user
          ? `Logged in as ` + this.state.user.username
          : `Please sign in`}
      </div>
    );
  }
}

export default Navigationbar;
