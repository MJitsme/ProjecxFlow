import React from "react";
import "../styles/evaluationmark.css"

function EvaluationView() {
  return (
    <div className="view_mark">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Evaluation Result</p>
      <div className="bgrect"></div>
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
        <Link to="/">
          <p className="logout">Log Out</p>
        </Link>
    </div>
  );
}

export default EvaluationView;
