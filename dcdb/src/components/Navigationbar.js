import React from "react";
import { Link } from "react-router-dom";
import local from "../api/local";
import AuthContext from "./AuthContext.js";

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
      <AuthContext.Consumer>
        {({ LOGIN_STATUS }) => (
          <div className="navbar-placeholder">
            {LOGIN_STATUS ? (
              <Link to={"/login"}>Logged in</Link>
            ) : (
              <Link to={"/login"}>Please sign in</Link>
            )}
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navigationbar;
