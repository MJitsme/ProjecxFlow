import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import "../styles/passwordreset.css"


const ResetpasswordCordinator = () => {
    const navigate = useNavigate();
    const[password , Setpassword] = useState("");
    const[repassword , Setrepassword] = useState("");
    const email = localStorage.getItem("email");

    const handlepasswordreset = async(event) =>{
        event.preventDefault();
        try
        {
            if(password!=repassword)
            {
                message.error("Password doesn't match");
            }
            else
            {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/user/recovercoordinator/${email}/${password}`
                  );
                  
                console.log(response);
                if(response.status===200)
                {
                    message.success("Password resetted successfully");
                    navigate("/coordinatorlogin");

                    Setpassword("");
                    Setrepassword("");
                }
                else if(response.status===204)
                {
                    message.error("User not found");
                }
                else
                {
                    message.error("Internal Server Error");
                }
            }
        }
        catch(error)
        {
            message.error("something went wrong");
        }
    }

    return (
        <div className="forgot">
          <p className="title">Reset Your Password</p>
          <div className="bgrect"></div>
          <form onSubmit={handlepasswordreset}>
          <input
            className="password"
            placeholder={"Password"}
            type="password"
            value={password}
            onChange={(event) => Setpassword(event.target.value)}
          ></input>
          <input
            className="repassword"
            placeholder={"Re enter Password"}
            type="password"
            value={repassword}
            onChange={(event) => Setrepassword(event.target.value)}
          ></input>
            <button className="submit" type="submit">Reset</button>
          </form>
          
        </div>
      );
    }

    export default ResetpasswordCordinator;