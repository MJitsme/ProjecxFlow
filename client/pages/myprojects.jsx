import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../styles/myproject.css"

const MyProjects = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coordinatorId = searchParams.get('coordinatorId');

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (coordinatorId) {
      fetchProjects();
    }
  }, [coordinatorId]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/projects?coordinatorId=${coordinatorId}`);
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='myprojects'>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Projects Coordinates</p>
      <div className="bgrect"></div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <p>{project.title}</p>
            <p>{project.year}</p>
            <p>{project.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
