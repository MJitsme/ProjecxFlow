import React, { useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import axios from "axios";

const SignupStudent = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [dept, setDept] = useState("");
  const [sem, setSem] = useState("");
  const [admno, setAdmno] = useState("");
  const [rollno, setRollno] = useState("");
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const handlestudentSignup = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/studentsignup`,
        {
          name,
          phoneno,
          email,
          college,
          dept,
          sem,
          admno,
          rollno,
          password,
          regno,
          answer,
        }
      );
      if (response.data.success) {
        message.success("Registered Successfully", () => {
          navigate("/studentlogin");
        });
      } else {
        message.error("Registration Failed");
      }
      console.log(response.data); // Handle the response from the server

      // Reset the form

      setname("");
      setPhoneno("");
      setEmail("");
      setCollege("");
      setDept("");
      setSem("");
      setAdmno("");
      setRollno("");
      setRegno("");
      setPassword("");
      setAnswer("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signup_student">
      <div className="title">Creating an Account</div>
      <form onSubmit={handlestudentSignup}>
        <input
          className="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
        <input
          className="phno"
          placeholder="Phone Number"
          type="number"
          value={phoneno}
          onChange={(event) => setPhoneno(event.target.value)}
        />
        <input
          className="email"
          placeholder="Email ID"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="clg"
          placeholder="College"
          type="text"
          value={college}
          onChange={(event) => setCollege(event.target.value)}
        />

        <input
          className="dept"
          placeholder="Department"
          type="text"
          value={dept}
          onChange={(event) => setDept(event.target.value)}
        />

        <input
          className="sem"
          placeholder="Semester"
          type="number"
          value={sem}
          onChange={(event) => setSem(event.target.value)}
        />

        <input
          className="adno"
          placeholder="Admission Number"
          type="text"
          value={admno}
          onChange={(event) => setAdmno(event.target.value)}
        />

        <input
          className="rno"
          placeholder="Roll Number"
          type="number"
          value={rollno}
          onChange={(event) => setRollno(event.target.value)}
        />

        <input
          className="regno"
          placeholder="Register Number"
          type="text"
          value={regno}
          onChange={(event) => setRegno(event.target.value)}
        />

        <input
          className="pwd"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <p className="quest">Which is your favorite Place ?</p>

        <input
          className="ans"
          name="Answer"
          placeholder="Submit your answer"
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button className="signup" type="submit">
          Submit
        </button>

        <div className="bgrect"></div>
      </form>
    </div>
  );
};

export default SignupStudent;
