import React, { useEffect, useState } from "react";
import "../styles/profilecoordinator.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CoordinatorHome = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/getCoordinatorData`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="coordinator">
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          {/* <p>ID: {userData.id}</p> */}
          {userData.email && (
            <Link to={`/myprojects?coordinatorId=${userData.email}`}>
              <button className="mine">My Projects</button>
            </Link>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}

      <Link to="/miniproject">
        <button className="mini">Mini Projects</button>
      </Link>

      <Link to="/mainproject">
        <button className="main">Main Projects</button>
      </Link>
      <Link to="/studentlist">
        <button className="student">Students List</button>
      </Link>
      <Link to="/guidelist">
        <button className="guide">Guides List</button>
      </Link>
      <Link to="/guidanceproject">
        <button className="guidance">Under My Guidance</button>
      </Link>
      <Link to="/makeannouncement">
        <button className="announcement">Announcements</button>
      </Link>
      <Link to="/evaluationcoordinator">
        <button className="marks">Evaluation</button>
      </Link>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Coordinator</p>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <div className="bg_rect"></div>
    </div>
  );
};

export default CoordinatorHome;
