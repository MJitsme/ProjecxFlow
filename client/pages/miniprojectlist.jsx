import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/miniprojectlist.css";

const Miniproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/projectmini`
      );
      setProjects(response.data.projects);
      console.log(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className='minilist'>
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Mini Projects</p>
      <div className="bgrect"></div>
      <div className="flexlist">
      <div className="flex gap-2">
      {projects.map((project) => (
        <div className='card' key={project._id}>
          <h3 className='card-title'>{project.title} - {project.year}</h3>          
        </div>
        
      ))}
    </div>
    </div>
    </div>
  );
};

export default Miniproject;
