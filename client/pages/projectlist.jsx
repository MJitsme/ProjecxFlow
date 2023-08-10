import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/adminprojectlist.css"

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/projectlist`);
      console.log(response)
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects list:', error);
    }
  };

  return (
    <div className="admin_proj_list">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Project History</p>
      <div className="bgrect"></div>
      {projects.map((project) => (
        <div key={project}>
          <h3>Title:{project.title}</h3>
          <p>Type:{project.type}</p>
          <p>Year:{project.year}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
