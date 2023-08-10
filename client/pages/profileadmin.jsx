import React, { useState } from "react";
import "../styles/adminprofile.css";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="admin_profile">
      <p className="title">Welcome Admin</p>
      <Link to="/miniproject">
        <div className="mini">Mini Projects</div>
      </Link>
      <Link to="/mainproject">
        <div className="main">Main Projects</div>
      </Link>
      <Link to="/studentlistadmin">
        <div className="student">Students List</div>
      </Link>
      <Link to="/guidelistadmin">
        <div className="guide">Guides List</div>
      </Link>
      <Link to="/coordinatorlist">
        <div className="coordinator">Coordinators List</div>
      </Link>
      <Link to="/projectlist">
        <div className="move">Projects History</div>
      </Link>
      <img className="logo" />
      <div className="line"></div>

      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Dashboard</p>
      <div className="bgrect"></div>
    </div>
  );
}
