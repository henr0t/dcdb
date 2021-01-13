import React from "react";
import Watchlist from "../components/Watchlist";
import UserDetails from "../components/UserDetails";
import AdminMenu from "../components/AdminMenu";
import local from "../api/local";

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
      <div className="fadin-animation">
        <h3 className="underline-header">Profile</h3>
        <div className="segment profile-box">
          <UserDetails
            username={this.state.username}
            email={this.state.email}
          />
        </div>
        <h3 className="underline-header">Watchlist</h3>
        <div className="segment profile-box">
          <Watchlist watchlist={this.state.watchlist} />
        </div>

        {this.state.role === "ADMIN" ? (
          <div>
            <h3 className="underline-header">Admin</h3>
            <div className="segment profile-box">
              <AdminMenu />{" "}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profile;
