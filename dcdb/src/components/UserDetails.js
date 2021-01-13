import React from "react";

const UserDetails = ({ username, email }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <b>Username</b>
          </td>
          <td>{username}</td>
        </tr>
        <tr>
          <td>
            <b>Email Adress</b>
          </td>
          <td> {email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetails;
