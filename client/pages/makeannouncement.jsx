import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/makeannouncement.css";

const Announce = () => {
  const [announcement, setAnnouncement] = useState("");
  const [date, setDate] = useState("");

  const handleAnnounce = async (event) => {
    event.preventDefault();
    try {
      console.log(announcement);
      console.log(date);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/announce`,
        {
          announcement,
          date,
        }
      );
      if (response.data.success) {
        message.success("Announce made successfully");
        console.log(response);
        setAnnouncement("");
        setDate("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Announce_make">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Announcement</p>
      <div className="bgrect"></div>
      <p className="title">Publish an Announcement</p>
      <form onSubmit={handleAnnounce}>
        <input className="anno_type"
          type="text"
          placeholder="Enter the announcement"
          value={announcement}
          onChange={(event) => setAnnouncement(event.target.value)}
        />
        <input className="anno_date"
          type="text"
          placeholder="Date of Submission"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button className="post" type="submit">Publish</button>
      </form>
      <Link to="/announcements">
        <p className="anno_list">Announcements List</p>
      </Link>
    </div>
  );
};

export default Announce;
