import React, { useState } from "react";
import "../styles/forgotpassword.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function ForgotPasswordStudent() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [answer, setAnswer] = useState("");

  const handlestudentPassword = async (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("email", email);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/forgotpasswordstudent`,
        {
          email,
          answer,
        });
      if (response.status===200) {
        localStorage.setItem("token", response.data.token);
       navigate("/passwordresetstudent");
       message.success("recovered successfully")
       console.log(response)

        // Reset the form
        setUsername("");
        setAnswer("");
      }
      else if(response.status===204){
        message.error("Wrong Answer!")
      }
      else{
        message.error("Internal server error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="forgot">
      <p className="title">Let's Recover Your Account</p>
      <div className="bgrect"></div>
      <form onSubmit={handlestudentPassword}>
      <input
        className="email"
        placeholder={"Email ID"}
        type="text"
        value={email}
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <p className="question">Which is your favorite Place ?</p>
      <input
        className="answer"
        placeholder={"Answer"}
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
      ></input>
        <button className="submit" type="submit">Submit</button>
      </form>
      
    </div>
  );
}




/*<p className="title">Let's Recover Your Account</p> */