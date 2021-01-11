import React from "react";
import local from "../api/local";

class UserDetails extends React.Component {
  state = { user: [] };

  componentDidMount() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      local
        .get("/api/v1/user/" + localStorage.getItem("userid"))
        .then((response) => {
          this.setState({ user: response.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <table>
        <tr>
          <td>
            <b>Username</b>
          </td>
          <td>{this.state.user.username}</td>
        </tr>
        <tr>
          <td>
            <b>Email Adress</b>
          </td>
          <td> {this.state.user.email}</td>
        </tr>
      </table>
    );
  }
}

export default UserDetails;
