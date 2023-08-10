import React, { useEffect, useState } from "react";
import "../styles/profileguide.css";
import { Link } from "react-router-dom";
import axios from "axios";

const GuideHome = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/getGuideData`,
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
    <div className="guide">
      {userData ? (
        <>
          <p className="title">Welcome {userData.name}</p>
          {/* <p>ID: {userData.id}</p> */}
          {userData.email && (
            <Link to={`/myguideprojects?guideId=${userData.email}`}>
              <div className="mine">My Projects</div>
            </Link>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
     
        <Link to="/miniproject"><div className="mini">Mini Projects</div></Link>
     
        <Link to="/mainproject"><div className="main">Main Projects</div></Link>
      
        <Link to="/studentlist"><div className="student">Students List</div></Link>
 
        <Link to="/makeannouncement"><div className="anno">Announcement</div></Link>
      
        <Link to="/evaluationguide"><div className="evaluation_mark">Evaluation</div></Link>

      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Dashboard</p>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <div className="bg_rect"></div>
      
    </div>
  );
};

export default GuideHome;
