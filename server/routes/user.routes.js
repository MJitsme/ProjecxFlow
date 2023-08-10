const express = require("express");
const {
   loginstudentController,
   loginguideController,
   logincordinatorController,
   signupstudentController,
   signupguideController,
   signupcordinatorController,
   authstudentController,
   authguideController,
   authcordinatorController,
   loginadminController,
   signupadminController,
   
} = require("../controller/user.controller");
const { teamaddcontroller,getteamController } = require("../controller/team.controller");
const { searchController } = require("../controller/search.controller");
const {
   calendargetAllEvents,
   calendardeleteEvent,
   calendarcreateEvent,
} = require("../controller/calender.controller");

const {
   forgotpasswordstudentController,
   forgotpasswordguideController,
   forgotpasswordcoordinatorController,
   recoverpasswordCoordinator,
   recoverpasswordStudent,
   recoverpasswordGuide
} = require("../controller/password.controller");
const authmiddleware = require("../middleware/auth.middleware");
const {
   listmainController,
   listminiController,
   liststudentController,
   listguideController,
   listcoordinatorController,
   listprojectController,
   getProjectsByCoordinatorId,
   getProjectsByGuideId,
   getdashboardController,
} = require("../controller/list.controller");
const {
   makeannouncementController,
   showannouncementController,
} = require("../controller/anouncement.controller");
const {
   deletestudentController,
   deleteguideController,
   deletecoordinatorController,
} = require("../controller/delete.controller");

const router = express.Router();

//routes
//loginpost

router.post("/studentlogin", loginstudentController);
router.post("/guidelogin", loginguideController);
router.post("/coordinatorlogin", logincordinatorController);

//signup post

router.post("/studentsignup", signupstudentController);
router.post("/guidesignup", signupguideController);
router.post("/coordinatorsignup", signupcordinatorController);

router.post("/getStudentData", authmiddleware, authstudentController);
router.post("/getGuideData", authmiddleware, authguideController);
router.post("/getCoordinatorData", authmiddleware, authcordinatorController);
router.get("/getTeamData", getteamController);

router.post("/teamcreate", teamaddcontroller);
router.post("/adminlogin", loginadminController);
router.post("/search", searchController);

router.post("/forgotpasswordstudent", forgotpasswordstudentController);
router.post("/forgotpasswordguide", forgotpasswordguideController);
router.post("/forgotpasswordcoordinator", forgotpasswordcoordinatorController);



router.get("/projectmain", listmainController);
router.get("/projectmini", listminiController);
router.get("/studentlist", liststudentController);
router.get("/studentlistadmin", liststudentController);
router.get("/guidelistadmin", listguideController);
router.get("/guidelist", listguideController);
router.get("/coordinatorlist", listcoordinatorController);
router.get("/projectlist", listprojectController);

router.get("/events/:teamId", calendargetAllEvents);
router.post("/events", calendarcreateEvent);
router.delete("/events/:eventId", calendardeleteEvent);

router.get("/projects", getProjectsByCoordinatorId);
router.get("/guideprojects", getProjectsByGuideId);

router.post("/announce", makeannouncementController);
router.get("/showannouncements", showannouncementController);
router.post("/deletestudent", deletestudentController);
router.post("/deleteguide", deleteguideController);
router.post("/deletecoordinator", deletecoordinatorController);
router.get("/getdashboard", getdashboardController);

router.post("/recoverstudent/:email/:password", recoverpasswordStudent);
router.post("/recoverguide/:email/:password", recoverpasswordGuide);
router.post("/recovercoordinator/:email/:password", recoverpasswordCoordinator);



module.exports = router;
