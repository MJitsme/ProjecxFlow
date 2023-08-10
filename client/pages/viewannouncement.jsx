import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/viewannouncement.css";
import { Link } from "react-router-dom";

const ViewAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/showannouncements`
      );
      console.log(response);
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <div className="announcement">
      <Link to="/teammembers">
        <div className="goto_mem">Team Members</div>
      </Link>

      <Link to="/calendar">
        <div className="goto_cal">Calender</div>
      </Link>

      <Link to="/fileupload">
        <div className="goto_doc">Attachments</div>
      </Link>

      <Link to="/evaluationresult">
        <div className="goto_mark">Result</div>
      </Link>

      <Link to="/viewannouncement">
        <div className="goto_ann">Announcements</div>
      </Link>
      <p className="usertype">Announcements</p>
      <div className="bgrect"></div>
      <img className="logo" />
      <div className="line"></div>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      {announcements.map((announcement) => (
        <div className="anno_key" key={announcement}>
          <h3 className="data">{announcement.announcement}</h3>
          <p className="anno_date">{announcement.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAnnouncement;
