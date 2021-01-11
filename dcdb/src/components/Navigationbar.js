import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext.js";

class Navigationbar extends React.Component {
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
