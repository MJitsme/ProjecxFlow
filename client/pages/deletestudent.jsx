import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "../styles/deletestudent.css"

const DeleteStudent = () => {
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState([]);
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/deletestudent`,
        {
          useremail,
        }
      );
      if (response.data.success) {
        message.success("Deleted Successfully");
        navigate("/studentlistadmin");

        // Reset the form
        setuseremail("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="admin_studentlist">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Removing Student</p>
      <div className="bgrect"></div>
      <form onSubmit={handleDelete}>
        <input
        className="emailid"
          type="text"
          placeholder="Enter The Student's Email ID"
          value={useremail}
          onChange={(event) => setuseremail(event.target.value)}
        ></input>
        <button className="deletestudent" type="submit">Remove Student</button>
      </form>
    </div>
  );
};

export default DeleteStudent;
