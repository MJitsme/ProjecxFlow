import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/mainprojectlist.css";

const Mainproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/projectmain`
      );
      //console.log(response);
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  const handleClick = async(projectId) => {
    console.log(projectId)
    try {
      const response = await axios.get(
        `http://localhost:9014/api/v1/pdf/viewabstract/${projectId}`
      );
      console.log(response.data);
      let link = response.data
      if(link==="") message.error("File not uploaded yet!")
      else window.open(link);
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="mainlist ">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Main Projects</p>
      <div className="bgrect"></div>
      <div className="flexlist">
      <div className="flex gap-2">
      {projects.map((project) => (
        <div className='card' key={project._id}  onClick={() => handleClick(project._id)}>
          <h3 className='card-title'>{project.title} - {project.year}</h3> 
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Mainproject;
