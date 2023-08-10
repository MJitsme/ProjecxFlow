const teamModel = require("../models/team.model");
const guideModel = require("../models/guide.model");
const studentModel = require("../models/student.model");
const cordinatorModel = require("../models/cordinator.model");
const projectModel = require("../models/project.model");
const evaluationModel = require("../models/evaluation.model")
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const teamaddcontroller = async (req, res) => {
   try {
      const coordinator = await cordinatorModel.findOne({
         email: req.body.coordinator,
      });
      const guide = await guideModel.findOne({ email: req.body.guide });
      const members = await studentModel.find({
         email: {
            $in: [
               req.body.member1,
               req.body.member2,
               req.body.member3,
               req.body.member4,
            ],
         },
      });

      if (!coordinator) {
         return res
            .status(204)
            .send({ message: "Coordinator not found", success: false });
      }
      if (!guide) {
         return res
            .status(204)
            .send({ message: "Guide not found", success: false });
      }
      if (members.length !== 4) {
         return res
            .status(204)
            .send({ message: "One or more members not found", success: false });
      }

      const newUser = new teamModel(req.body);
      await newUser.save();
      const newProject = new projectModel();
      newProject.title = req.body.title;
      newProject.year = req.body.year;
      newProject.type = req.body.type;
      newProject.team = newUser._id;
      await newProject.save();

      const newEvaluation = new evaluationModel();
      newEvaluation.project=newProject._id;
      newEvaluation.abstract=0;
      newEvaluation.diary=0;
      newEvaluation.srs=0;
      newEvaluation.sdd=0;
      newEvaluation.implementation=0;
      newEvaluation.ppt=0;
      newEvaluation.report=0;
      newEvaluation.total=0;
      await newEvaluation.save();


      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      });
      res.status(200).send({
         message: "Team creation successful",
         success: true,
         token: token,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `Failed to add members: ${error.message}`,
      });
   }
};

const getteamController = async (req, res) => {
   try {
      console.log(req.query.teamId);
      const team = await teamModel.findOne({ _id: req.query.teamId });
      if (!team) {
         return res
            .status(200)
            .send({ message: "team not found", success: false });
      } else {
         // const userdata = await
         const project = await projectModel.findOne({team:team._id});
         const mem1 = await studentModel.findOne({email:team.member1});
         const namemem1 = mem1.name;
         console.log(namemem1)
         const mem2 = await studentModel.findOne({email:team.member2});
         const namemem2 = mem2.name;
         const mem3 = await studentModel.findOne({email:team.member3});
         const namemem3 = mem3.name;
         console.log(namemem3)
         const mem4 = await studentModel.findOne({email:team.member4});
         const namemem4 = mem4.name;
         const mem5 = await guideModel.findOne({email:team.guide});
         const namemem5 = mem5.name;
         const mem6 = await cordinatorModel.findOne({email:team.coordinator});
         const namemem6 = mem6.name;


         res.status(200).json({
            success: true,
            data: {
               id: team._id,
               coordinator: team.coordinator,
               guide: team.guide,
               member1: team.member1,
               member2: team.member2,
               member3: team.member3,
               member4: team.member4,
               namecordinator: namemem6,
               nameguide: namemem5,
               namemember1: namemem1,
               namemember2: namemem2,
               namemember3: namemem3,
               namemember4: namemem4,
               projectId:project._id,
            },
         });
      }
   } catch (error) {
      console.log(error);
      res.status(500).send({
         message: " authentication error",
         success: false,
         error,
      });
   }
};

module.exports = { teamaddcontroller,getteamController };
