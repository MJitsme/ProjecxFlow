import React from "react";
import "../styles/timeline.css";
import { Link } from "react-router-dom";
// import {MdOutlineKeyboardBackspace} from 'react-icons/md'

function Timeline() {
  return (
    <div className="timepage">
      <div className="title">
        {/* <button className="back"><MdOutlineKeyboardBackspace /></button> */}
        <button className="back">Back</button>
        <p className="projname">Project Name</p>
      </div>
      <div className="elements">
        <span className="tline">Timeline</span>
        <span className="atch">Attachments</span>
        <span className="tmem">Team Members</span>
        <span className="prodetail">Project Details</span>
      </div>
      <div>
        <p className="top_sub">Topic Submission</p>
        <input className="date_ts" placeholder="Date" />

        <p className="ze_present">Zeroth Presentation</p>
        <input className="date_zp" placeholder="Date" />

        <p className="fi_present">First Presentation</p>
        <input className="date_fp" placeholder="Date" />

        <p className="sdd_sub">SDD Submission</p>
        <input className="date_sds" placeholder="Date" />

        <p className="se_present">Second Presentation</p>
        <input className="date_sp" placeholder="Date" />

        <p className="th_present">Third Presentation</p>
        <input className="date_tp" placeholder="Date" />

        <p className="fo_present">Fourth Presentation</p>
        <input className="date_fop" placeholder="Date" />

        <p className="top_sub2">Topic Submission</p>
        <input className="date_ts2" placeholder="Date" />

        <p className="top_sub3">Topic Submission</p>
        <input className="date_ts3" placeholder="Date" />

        <button className="tsub" type="submit">
          Submit
        </button>
      </div>
      <div className="bgrect"></div>
    </div>
  );
}

export default Timeline;
