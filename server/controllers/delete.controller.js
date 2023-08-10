const express = require("express");
const app = express();
const projectModel = require("../models/project.model");
const studentModel = require("../models/student.model");
const guideModel = require("../models/guide.model");
const coordinatorModel = require("../models/cordinator.model");
const teamModel = require("../models/team.model");

const deletestudentController = async (req, res) => {
   try {
      const user = await studentModel.findOneAndDelete({
         email: req.body.useremail,
      });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }

      res.status(200).send({
         message: "Student Deleted successfully",
         success: true,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `deletion error ${error.message}`,
      });
   }
};

const deleteguideController = async (req, res) => {
   try {
      const user = await guideModel.findOneAndDelete({
         email: req.body.useremail,
      });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }

      res.status(200).send({
         message: "Guide Deleted successfully",
         success: true,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `deletion error ${error.message}`,
      });
   }
};

const deletecoordinatorController = async (req, res) => {
   try {
      const user = await coordinatorModel.findOneAndDelete({
         email: req.body.useremail,
      });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }

      res.status(200).send({
         message: "Coordinator Deleted successfully",
         success: true,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `deletion error ${error.message}`,
      });
   }
};

module.exports = {
   deletestudentController,
   deleteguideController,
   deletecoordinatorController,
};
