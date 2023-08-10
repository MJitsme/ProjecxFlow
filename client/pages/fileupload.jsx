import React, { useState } from "react";
import axios from "axios";
import "../styles/fileupload.css";
import { message } from "antd";
import { Link } from "react-router-dom";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [projectId, setProectId] = useState(
    localStorage.getItem("projectId") || null
  );
  if (!projectId) {
    message.error("No token for project present!");
    return <></>;
  }

  const [link, setLink] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const checkForFile = () => {
    if (!file) {
      message.error("Please select a file to upload.");
      return false;
    }
    return true;
  };

  const uploadFile = async (route) => {
    if (!route) return false;
    try {
      const formData = new FormData();
      formData.append("pdf", file);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/pdf/${route}/${projectId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      message.success("File uploaded successfully!");
      return true;
    } catch (error) {
      message.error("Error uploading file:", error);
      return false;
    }
  };

  const fetchLinkFromFile = async (route) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pdf/view${route}/${projectId}`
      );
      let link = response.data;
      if (link === "") message.error("File not uploaded yet!");
      else window.open(link);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadabstract = async () => {
    if (!checkForFile()) return;
    await uploadFile("abstract");
  };

  const handleUploaddiary = async () => {
    if (!checkForFile()) return;
    await uploadFile("diary");
  };

  const handleUploadsrs = async () => {
    if (!checkForFile()) return;
    await uploadFile("srs");
  };

  const handleUploadsdd = async () => {
    if (!checkForFile()) return;
    await uploadFile("sdd");
  };

  const handleUploadppt = async () => {
    if (!checkForFile()) return;
    await uploadFile("presentation");
  };

  const handleUploadimplementation = async () => {
    if (!checkForFile()) return;
    await uploadFile("implementation");
  };

  const handleUploadreport = async () => {
    if (!checkForFile()) return;
    await uploadFile("report");
  };

  const handleViewabstract = async () => {
    await fetchLinkFromFile("abstract");
  };
  const handleViewdiary = async () => {
    await fetchLinkFromFile("diary");
  };
  const handleViewsdd = async () => {
    await fetchLinkFromFile("srs");
  };
  const handleViewsrs = async () => {
    await fetchLinkFromFile("sdd");
  };
  const handleViewppt = async () => {
    await fetchLinkFromFile("ppt");
  };
  const handleViewimplementation = async () => {
    await fetchLinkFromFile("implementation");
  };
  const handleViewreport = async () => {
    await fetchLinkFromFile("report");
  };

  const buttonStyles = {
    fontSize: "3rem",

    margin: "1rem 3rem",
  };

  return (
    <div className="file_upload">
      <h2 className="file_title">Upload A File</h2>
      <h2 className="file_title2">Choose The File Type</h2>
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
      <div className="bgrect"></div>
      <img className="logo" />
      <div className="line"></div>
      <Link to="/">
        <p className="logout">Log Out</p>
      </Link>
      <input
        className="fileuploadkey"
        type="file"
        onChange={handleFileChange}
      />
      {file && (
        <div>
          <h3>Selected File:</h3>
          <p>Name: {file.name}</p>
          <p>Size: {file.size} bytes</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      <div className="upload_button">
        <br></br>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadabstract}
        >
          Abstract
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadsrs}
        >
          SRS
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadsdd}
        >
          SDD
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadppt}
        >
          PPT
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadimplementation}
        >
          Implementation
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploaddiary}
        >
          Diary
        </button>
        <button
          className="upload_button"
          style={{ ...buttonStyles }}
          onClick={handleUploadreport}
        >
          Report
        </button>
      </div>

      <div className="view_button">
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewabstract}
        >
          View Abstract
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewsrs}
        >
          View SRS
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewsdd}
        >
          View SDD
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewppt}
        >
          View PPT
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewimplementation}
        >
          View Implementation
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewdiary}
        >
          View Diary
        </button>
        <button
          className="view_button"
          style={{ ...buttonStyles }}
          onClick={handleViewreport}
        >
          View Report
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
