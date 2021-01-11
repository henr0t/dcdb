import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext.js";

class Navigationbar extends React.Component {
  render() {
    var LoggedInMenu = (
      <div>
        {" "}
        <Link to={"/login"}>Logged in</Link> -{" "}
        <Link to={"/profile"}>Profile</Link> - <Link to={"/"}>Home</Link>
      </div>
    );

    var LoggedOutMenu = (
      <Link to={"/login"}>
        <b>Please sign in</b>
      </Link>
    );

    return (
      <AuthContext.Consumer>
        {({ LOGIN_STATUS }) => (
          <div className="navbar-placeholder">
            {LOGIN_STATUS ? LoggedInMenu : LoggedOutMenu}
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navigationbar;
