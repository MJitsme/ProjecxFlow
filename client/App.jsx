//home
import Home from "./pages/homepage";
import UserType from "./pages/selectingtype";
import TeamCreate from "./pages/teamcreate";

//login pages
import LoginStudent from "./pages/studentlogin";
import LoginCoordinator from "./pages/coordinatorlogin";
import LoginGuide from "./pages/guidelogin";
import LoginAdmin from "./pages/adminlogin";

//signup pages
import SignupStudent from "./pages/signupstudent";
import SignupCoordinator from "./pages/signupcoordinator";
import SignupGuide from "./pages/signupguide";

//forgot password
import ForgotPasswordStudent from "./pages/forgotpasswordstudent";
import ForgotPasswordGuide from "./pages/forgotpasswordguide";
import ForgotPasswordCoordinator from "./pages/forgotpasswordcoordinator";
import ProjectDetails from "./pages/projectdetails";
import Calendar from "./pages/calendar";
// import StudentHome from "./pages/"
//import Timeline from "./pages/timeline";

//features
import Miniproject from "./pages/miniprojectlist";
import Mainproject from "./pages/mainprojectlist";
import ProjectSearch from "./pages/projectsearch";
import Guidelist from "./pages/guidelist";
import MyProjects from "./pages/myprojects";
import GuidanceProject from "./pages/guidanceproject";
import Coordinatorlist from "./pages/coordinatorlist";
import Projectlist from "./pages/projectlist";
import EvaluationCoordinator from "./pages/evaluationcoordinator";
import EvaluationGuide from "./pages/evaluationguide";
import EvaluationView from "./pages/evaluationview";

//home profile
import AdminHome from "./pages/profileadmin";
import CoordinatorHome from "./pages/profilecoordinator";
import GuideHome from "./pages/profileguide";
import StudentHome from "./pages/profilestudent";
import Studentlist from "./pages/studentlist";
import StudentlistAdmin from "./pages/studentlistadmin";
import MyguideProjects from "./pages/myguideprojects";
import DeleteStudent from "./pages/deletestudent";
import GuidelistAdmin from "./pages/guidelistadmin";
import DeleteGuide from "./pages/deleteguide";
import DeleteCoordinator from "./pages/deletecoordinator";
import TeamDashboard from "./pages/teamdashboard";
import Members from "./pages/members";
import FileUploader from "./pages/fileupload";

//announcement
import Announce from "./pages/makeannouncement";
import AnnouncementsList from "./pages/announcement";
import ViewAnnouncement from "./pages/viewannouncement";

import ResetpasswordStudent from "./pages/passwordresetstudent";
import ResetpasswordGuide from "./pages/passwordresetguide";


import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetpasswordCordinator from "./pages/passwordresetcordinator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          <Route path="/adminhomepage" element={<AdminHome />} />
          <Route path="/guidehomepage" element={<GuideHome />} />
          <Route path="/studenthomepage" element={<StudentHome />} />
          <Route path="/coordinatorhomepage" element={<CoordinatorHome />} />

          {/* Login Pages */}
          <Route path="/studentlogin" element={<LoginStudent />} />
          <Route path="/guidelogin" element={<LoginGuide />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />
          <Route path="/coordinatorlogin" element={<LoginCoordinator />} />

          {/* SignUp Pages */}
          <Route path="/usertype" element={<UserType />} />
          <Route path="/coordinatorsignup" element={<SignupCoordinator />} />
          <Route path="/studentsignup" element={<SignupStudent />} />
          <Route path="/guidesignup" element={<SignupGuide />} />

          {/* Forgot password */}
          <Route
            path="/forgotpasswordstudent"
            element={<ForgotPasswordStudent />}
          />
          <Route
            path="/forgotpasswordguide"
            element={<ForgotPasswordGuide />}
          />
          <Route
            path="/forgotpasswordcoordinator"
            element={<ForgotPasswordCoordinator />}
          />

          {/* Lists */}
          <Route path="/miniproject" element={<Miniproject />} />
          <Route path="/mainproject" element={<Mainproject />} />
          <Route path="/studentlist" element={<Studentlist />} />
          <Route path="/guidelist" element={<Guidelist />} />
          <Route path="/coordinatorlist" element={<Coordinatorlist />} />
          <Route path="/projectlist" element={<Projectlist />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/guidanceproject" element={<GuidanceProject />} />
          <Route path="/myguideprojects" element={<MyguideProjects />} />
          <Route path="/guidelistadmin" element={<GuidelistAdmin />} />
          <Route path="/studentlistadmin" element={<StudentlistAdmin />} />

          {/* Removing User */}
          <Route path="/deletestudent" element={<DeleteStudent />} />
          <Route path="/deleteguide" element={<DeleteGuide />} />
          <Route path="/deletecoordinator" element={<DeleteCoordinator />} />

          {/* Dashboard */}
          <Route path="/teamcreate" element={<TeamCreate />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/teamdashboard" element={<TeamDashboard />} />
          <Route path="/teammembers" element={<Members />} />

          {/* Announcements */}
          <Route path="/viewannouncement" element={<ViewAnnouncement />} />
          <Route path="/makeannouncement" element={<Announce />} />
          <Route path="/announcements" element={<AnnouncementsList />} />

          {/* features */}
          <Route path="/projectsearch" element={<ProjectSearch />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/fileupload" element={<FileUploader />} />
          <Route path="/passwordresetstudent" element={<ResetpasswordStudent />} />
          <Route path="/passwordresetguide" element={<ResetpasswordGuide />} />
          <Route path="/passwordresetcoordinator" element={<ResetpasswordCordinator />} />

          {/* Evaluation */}
          <Route
            path="/evaluationcoordinator"
            element={<EvaluationCoordinator />}
          />
          <Route
            path="/evaluationguide"
            element={<EvaluationGuide />}
          />
          <Route
            path="/evaluationresult"
            element={<EvaluationView />}
          />
        </Routes>

      
      </BrowserRouter>
    </>
  );
}

export default App;

