import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/guidelist.css";

const Guidelist = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    fetchGuides();
  }, []);

  const fetchGuides = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/guidelist`
      );
      console.log(response);
      setGuides(response.data.guides);
    } catch (error) {
      console.error("Error fetching guides list:", error);
    }
  };

  return (
    <div className="guide">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Guide List</p>
      <div className="bgrect"></div>

      {guides.map((guide) => (
        <div className="list" key={guide}>
          <h3>{guide.name}</h3>
          <p>Email ID : {guide.email}</p>
          <p>Phone Number : {guide.phoneno}</p>
          <p>Faculty ID : {guide.fid}</p>
          <p>Department : {guide.dept}</p>
          <p>College : {guide.college}</p>
        </div>
      ))}
    </div>
  );
};

export default Guidelist;
