import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/announcementslist.css"

const AnnouncementsList = () => {
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
    <div className="anno_list_cls">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Published Announcements</p>
      <div className="bgrect"></div>
      <h2>Announcements</h2>
      {announcements.map((announcement) => (
        <div className="list" key={announcement}>
          <h3 className="list_list">
            {announcement.announcement} - {announcement.date}
          </h3>
        </div>
      ))}
      <Link to="/makeannouncement">
        <div className="make">Create an Announcement</div>
      </Link>
    </div>
  );
};

export default AnnouncementsList;


/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/announcementslist.css";
import AnnouncementTicker from "./AnnouncementTicker"; // Import the AnnouncementTicker component

const AnnouncementsList = () => {
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
    <div className="anno_list_cls">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Published Announcements</p>
      <div className="bgrect"></div>
      <h2>Announcements</h2>
      <AnnouncementTicker announcements={announcements.map((a) => `${a.announcement} - ${a.date}`)} />
      {announcements.map((announcement) => (
        <div className="list" key={announcement._id}>
          <h3 className="list_list">
            {announcement.announcement} - {announcement.date}
          </h3>
        </div>
      ))}
      <Link to="/makeannouncement">
        <div className="make">Create an Announcement</div>
      </Link>
    </div>
  );
};

export default AnnouncementsList;*/
