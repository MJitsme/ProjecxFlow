import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/teammembers.css";
import { Link } from "react-router-dom";

const Members = () => {
  const [teamdata, SetTeamdata] = useState();

  const getTeamData = async () => {
    try {
      const teamId = localStorage.getItem("teamId");
      console.log(teamId);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/getTeamData?teamId=${teamId}`
      );
      if (response.data.success) {
        localStorage.setItem("projectId", response.data.data.projectId);
        SetTeamdata(response.data.data);
        console.log(teamdata.namemem3)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  if (teamdata)
    return (
      <div className="team_members">
        <div className="bgrect"></div>
        <img className="logo" />
        <div className="line"></div>
        <p className="usertype">Team Members</p>
        <Link to="/">
          <p className="logout">Log Out</p>
        </Link>
        <h1 className="tag_coordinator">Coordinator</h1>
        <div className="line_coo"></div>
        <p className="tag_coordinator_details_name">{teamdata.namecordinator}</p>
        <p className="tag_coordinator_details_id">{teamdata.coordinator}</p>
        <h2 className="tag_guide">Guide</h2>
        <div className="line_guide"></div>
        <p className="tag_guide_details_name">{teamdata.nameguide}</p>
        <p className="tag_guide_details_id">{teamdata.guide}</p>
        <h3 className="tag_mem">Teammates</h3>
        <div className="line_mem"></div>

        <div className="pro_data">
          <p>
            {teamdata.member1} | {teamdata.member1}
          </p>
          <p>
            {teamdata.member2} | {teamdata.member2}
          </p>
          <p>
            {teamdata.member3} | {teamdata.member3}
          </p>
          <p>
            {teamdata.member4} | {teamdata.member4}
          </p>
        </div>

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
      </div>
    );
};
export default Members;
