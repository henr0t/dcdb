import React from "react";
import Login from "../components/Login";

export const Loginpage = ({ loggedIn }) => (
  <div className="fadin-animation">
    <h3 className="underline-header">Log in</h3>
    <div className="segment text-box">
      <Login>{loggedIn}</Login>

      <button className="logout-btn" onClick={() => localStorage.clear()}>
        Log out
      </button>
    </div>
  </div>
);
