import React from "react";
import Watchlist from "../components/Watchlist";
import UserDetails from "../components/UserDetails";

export const Profile = () => (
  <div className="fadin-animation">
    <h3 className="underline-header">Profile</h3>
    <div className="segment profile-box">
      <UserDetails />
    </div>
    <h3 className="underline-header">Watchlist</h3>
    <div className="segment profile-box">
      <Watchlist />
    </div>
  </div>
);
