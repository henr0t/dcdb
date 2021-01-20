import React from "react";
import Watchlist from "../components/Watchlist";
import UserDetails from "../components/UserDetails";
import AdminTools from "../components/AdminTools";
import local from "../api/local";
import AuthContext from "../components/AuthContext.js";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  state = { username: null, email: null, role: null, watchlist: [] };

  componentDidMount() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      local
        .get("/api/v1/user/" + localStorage.getItem("userid"))
        .then((response) => {
          this.setState({
            username: response.data.username,
            email: response.data.email,
            role: response.data.role,
            watchlist: response.data.watchlist,
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <AuthContext.Consumer>
        {({ logout }) => (
          <div>
            <h3 className="underline-header">Profile</h3>
            <div className="profile-segment">
              <div className="profile-box">
                <UserDetails
                  username={this.state.username}
                  email={this.state.email}
                />
              </div>
              <Link to={"/"}>
                <button className="logout-btn" onClick={logout}>
                  Log out
                </button>
              </Link>
            </div>

            {this.state.role === "ADMIN" ? (
              <div>
                <h3 className="underline-header">Admin Tools</h3>
                <div className="profile-segment">
                  <div className="profile-box">
                    <AdminTools />
                  </div>
                </div>
              </div>
            ) : null}
            <h3 className="underline-header">Watchlist</h3>
            <div className="profile-segment">
              <div className="profile-box">
                <Watchlist watchlist={this.state.watchlist} />
              </div>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Profile;
