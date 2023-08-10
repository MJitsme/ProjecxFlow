import React from "react";
import "../styles/selectingtype.css";
import { Link } from "react-router-dom";

export default function UserType() {
  return (
    <div className="select">
      <p className="title">Hey ! Welcome to ProjecXFlow</p>
      <p className="subtitle">Can You Please Select Your Role </p>
      <Link to="/coordinatorlogin">
        <div className="coordinator">Coordinator</div>
      </Link>
      <Link to="/guidelogin">
        <div className="guide">Guide</div>
      </Link>
      <Link to="/studentlogin">
        <div className="student">Student</div>
      </Link>

      <div className="bgrect"></div>
    </div>
  );
}

/*<Link to="/src/pages/loginpage.jsx">
        <div className="loginkey">Login</div>
    </Link> */
