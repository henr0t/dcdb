import React from "react";
import Login from "../components/Login";

export const Loginpage = () => (
  <div className="fadin-animation">
    <div className="login-segment">
      <div className="login-text">
        <h1>
          <b>DCDB</b>
        </h1>
        <h4>Keep track of all the DC films that you have seen.</h4>
      </div>
      <div className="login-box">
        <Login />
        <p>Forgot Password?</p>
        <hr />
        Create new account
      </div>
    </div>
  </div>
);
