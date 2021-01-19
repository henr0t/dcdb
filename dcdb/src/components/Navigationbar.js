import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext.js";

class Navigationbar extends React.Component {
  render() {
    var LoggedInMenu = (
      <div>
        <Link to={"/"}>Home</Link> -<Link to={"/profile"}> Profile</Link> -
        <Link to={"/movies"}> Search</Link>
      </div>
    );

    var LoggedOutMenu = (
      <div>
        <Link to={"/login"}>
          <b>Please sign in</b>
        </Link>{" "}
        - <Link to={"/"}>Home</Link> -<Link to={"/movies"}> Search</Link>
      </div>
    );

    return (
      <div>
        <AuthContext.Consumer>
          {({ LOGIN_STATUS }) => (
            <div className="navbar-placeholder">
              {LOGIN_STATUS ? LoggedInMenu : LoggedOutMenu}
            </div>
          )}
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default Navigationbar;
