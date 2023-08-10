import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/profilestudent.css";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from '../pages/cardcomponent'

const StudentHome = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);

  const fetchProjects = async (email) => {
    try {
      const response = await axios.get(`http://localhost:9014/api/v1/user/getdashboard?studentId=${email}`);
      console.log(response.data.projects)
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects list:', error);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/getStudentData`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.data.success) {
        setUserData(response.data.data);
        await fetchProjects(response.data.data.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (teamId) => {
    console.log(teamId)
    localStorage.setItem('teamId', teamId);
    navigate('/teammembers');
  };

  useEffect(() => {
    getUserData();
  }, []);


  if(projects.length!=0){
    return (
      <div className="student">
        {userData ? (
          <>
            <p className="title">Welcome {userData.name}</p>
            <p>ID: {userData.id}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <img className="logo" />
        <div className="line"></div>
        <p className="usertype">Dashboard</p>
        <Link to="/">
          <p className="logout">Log Out</p>
        </Link>
        <Link to="/teamcreate">
          <p className="create">Create Dashboard</p>
        </Link>
        <div className="bgrect"></div>
        <div className="bgrect"></div>
        {/* <h2>Dashboards</h2> */}
        <div className="searchResults_s" style={{marginTop:`30rem`}}>
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            type={project.type}
            year={project.year}
            handleClick={() => handleClick(project.id)}
          />
        ))}
        </div>
        
      </div>
    );
  }
  else{
      return (
      <div className="student">
        {userData ? (
          <>
            <p className="title">Welcome {userData.name}</p>
            <p>ID: {userData.id}</p>
          <p className="msg"> You Don't Have Any Dashboard Yet</p>
            <div className="Dashboard">
        </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <img className="logo" />
        <div className="line"></div>
        <p className="usertype">Dashboard</p>
        <Link to="/">
          <p className="logout">Log Out</p>
        </Link>
        <Link to="/teamcreate">
          <p className="create2">Create a new dashboard</p>
        </Link>
        <div className="bgrect"></div>
        <div className="bgrect"></div>
        
        </div>
    )
  }

  
};

export default StudentHome;