import React, { useState } from "react";
import "../styles/signupfaculties.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, message } from "antd";
import axios from "axios";


const SignupCoordinator = () => {
  const navigate=useNavigate()
  const [name, setname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [dept, setDept] = useState('');
  const [password, setPassword] = useState('');
  const [fid, setFid] = useState('');
  const [answer, setAnswer] = useState('');

  const handlecoordinatorSignup = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/coordinatorsignup`, {
        name,
        phoneno,
        email,
        college,
        dept,
        password,
        fid,
        answer
      });
      if (response.data.success) {
        message.success("Registered Successfully", () => {
          navigate("/coordinatorlogin");
        });
      } else {
        message.error("Registration Failed");
      }
      console.log(response.data);
    }catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign_up">
      <div className="title">Creating an Account</div>
      <form onSubmit={handlecoordinatorSignup}>
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
          className="fid"
          placeholder="Faculty ID"
          type="text"
          value={fid}
          onChange={(event) => setFid(event.target.value)}
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
}

export default  SignupCoordinator;


// code connect with db
// import React, { useState } from "react";
// import "../styles/signupfaculties.css";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, message } from "antd";
// import axios from "axios";

// const SignupCoordinator = () => {
//     const navigate=useNavigate()
//     const [name, setname] = useState('');
//     const [phoneno, setPhoneno] = useState('');
//     const [email, setEmail] = useState('');
//     const [college, setCollege] = useState('');
//     const [dept, setDept] = useState('');
//     const [sem, setSem] = useState('');
//     const [admno, setAdmno] = useState('');
//     const [rollno, setRollno] = useState('');
//     const [regno, setRegno] = useState('');
//     const [password, setPassword] = useState('');
//     const [answer, setAnswer] = useState('');

//     const handlestudentSignup = async (event) => {
//       event.preventDefault();

//       try {
//         // Send the form data to the backend API
//         const response = await axios.post('http://localhost:9013/api/v1/user/studentsignup', {
//           name,
//           phoneno,
//           email,
//           college,
//           dept,
//           sem,
//           admno,
//           rollno,
//           password,
//           regno,
//           answer
//         });
//         if (response.data.success) {
//           message.success("Registered Successfully", () => {
//             navigate("/studentlogin");
//           });
//         } else {
//           message.error("Registration Failed");
//         }
//         console.log(response.data); // Handle the response from the server

//         // Reset the form

//         setname('');
//         setPhoneno('');
//         setEmail('');
//         setCollege('');
//         setDept('');
//         setSem('');
//         setAdmno('');
//         setRollno('');
//         setRegno('');
//         setPassword('');
//         setAnswer('');
//       } catch (error) {
//         console.error(error);
//       }
//     };
//   return function SignupCoordinator {
//     <div className="sign_up">
//       <div className="title">Creating an Account</div>
//       {/* <form onSubmit={handlestudentSignup}> */}
//       <input
//         className="name"
//         placeholder="Name"
//         type="text"
//         value={name}
//         onChange={(event) => setname(event.target.value)}
//       />
//       <input
//         className="phno"
//         placeholder="Phone Number"
//         type="number"
//         value={phoneno}
//         onChange={(event) => setPhoneno(event.target.value)}
//       />
//       <input
//         className="email"
//         placeholder="Email ID"
//         type="text"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />
//       <input
//         className="clg"
//         placeholder="College"
//         type="text"
//         value={college}
//         onChange={(event) => setCollege(event.target.value)}
//       />

//       <input
//         className="dept"
//         placeholder="Department"
//         type="text"
//         value={dept}
//         onChange={(event) => setDept(event.target.value)}
//       />

//       <input
//         className="facultyid"
//         placeholder="Faculty ID"
//         type="text"
//         // value={regno}
//         onChange={(event) => setRegno(event.target.value)}
//       />

//       <input
//         className="pwd"
//         type="password"
//         placeholder="Password"
//         // value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />

//       <p className="quest">Which is your favorite Place ?</p>

//       <input
//         className="ans"
//         name="Answer"
//         placeholder="Submit your answer"
//         type="text"
//         //   value={answer}
//         onChange={(event) => setAnswer(event.target.value)}
//       />

//       <button className="signup" type="submit">
//         Submit
//       </button>

//       <div className="bgrect"></div>
//       {/* </form> */}
//     </div>
//   );
// };

// export default SignupCoordinator;
