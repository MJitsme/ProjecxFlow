import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/adminfeatures.css";

const StudentlistAdmin = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/studentlistadmin`
      );
      console.log(response);
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students list:", error);
    }
  };

  return (
    <div className="admin_studentlist">
      <img className="logo" />
      <div className="line"></div>
      <p className="usertype">Student List</p>
      <div className="bgrect"></div>
      {students.map((student) => (
        <div key={student}>
          <h3>Name:{student.name}</h3>
          <p>Email:{student.email}</p>
          <p>Phone Number:{student.phoneno}</p>
          <p>Register Number:{student.regno}</p>
          <p>Admission Number:{student.admno}</p>
          <p>Semester:{student.sem}</p>
          <p>Department:{student.dept}</p>
          <p>Roll Number:{student.rollno}</p>
          <p>College:{student.college}</p>
        </div>
      ))}

      <Link to="/deletestudent">
        <div className="delete_student">Remove Student</div>
      </Link>
    </div>
  );
};

export default StudentlistAdmin;
