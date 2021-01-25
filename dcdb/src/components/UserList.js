import "./UserList.css";
import React from "react";
import filmapp from "../api/filmapp";

class UserList extends React.Component {
  state = { userList: [] };

  componentDidMount() {
    filmapp
      .get("/api/v1/user/all")
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((error) => console.log(error));
  }

  showUserList() {
    return this.state.userList.map((user) => {
      return (
        <tr key={user.id}>
          <td>
            <p>{user.username}</p>
          </td>
          <td>
            <p>{user.email}</p>
          </td>
          <td>
            <p>{user.accountId}</p>
          </td>
          <td>
            <p>{user.watchlist.length}</p>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="userlist">
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Id</th>
              <th>Watched</th>
            </tr>
            {this.showUserList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
