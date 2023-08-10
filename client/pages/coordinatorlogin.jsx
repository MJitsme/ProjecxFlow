import React, { useState } from "react";
import "../styles/loginpage.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

export default function LoginCoordinator() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlecoordinatorLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/coordinatorlogin`,
        {
          email,
          password,
        });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("coordinatorId", response.data.studentId)
        message.success("Login Successful");
        navigate("/coordinatorhomepage");
       console.log(response)

        // Reset the form
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login_page">
      <form onSubmit={handlecoordinatorLogin}>
        <div className="rectangle"></div>
        <p className="projecx_flow">ProjecX flow</p>
        <button className="login_key" type="submit">
          Login
        </button>
        <div className="grup_pic"></div>
        <img className="logo" />
        <div className="rectuser"></div>
        <input
          className="user_name"
          type="text"
          value={email}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <div className="rectpass"></div>
        <input
          className="pass_word"
          type="Password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        </form>
        <Link to="/forgotpasswordcoordinator">
          <p className="forgot_pass">Forgot Password</p>
        </Link>
        <Link to="/coordinatorsignup">
          <p className="create_acc">Create an Account</p>
        </Link>
        <p className="welcome">Welcome Back</p>
        <div className="line"></div>
        
    </div>
  );
}
