const express = require("express");
const app = express();
const studentModel = require("../models/student.model");
const guideModel = require("../models/guide.model");
const cordinatorModel = require("../models/cordinator.model");
const adminModel = require("../models/admin.model");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Student = require("../models/student.model");

const forgotpasswordstudentController = async (req, res) => {
   try {
      const user = await studentModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(404)
            .send({ message: "user not found", success: false });
      }
      if (req.body.answer != user.answer) {
         return res
            .status(204)
            .send({ message: "Wrong answer", success: false });
      } else {
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
         });
         res.status(200).send({
            message: "Recovery Initiated",
            success: true,
            token: token,
         });
      }
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `recovery error ${error.message}`,
      });
   }
};

const forgotpasswordguideController = async (req, res) => {
   try {
      const user = await guideModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(404)
            .send({ message: "user not found", success: false });
      }
      if (req.body.answer != user.answer) {
         return res
            .status(204)
            .send({ message: "Wrong answer", success: false });
      } else {
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
         });
         res.status(200).send({
            message: "Recovery Initiated",
            success: true,
            token: token,
         });
      }
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `recovery error ${error.message}`,
      });
   }
};

const forgotpasswordcoordinatorController = async (req, res) => {
   try {
      const user = await cordinatorModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(404)
            .send({ message: "user not found", success: false });
      }
      if (req.body.answer != user.answer) {
         return res
            .status(204)
            .send({ message: "Wrong answer", success: false });
      } else {
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
         });
         res.status(200).send({
            message: "Recovery Initiated",
            success: true,
            token: token,
         });
      }
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `recovery error ${error.message}`,
      });
   }
};

const recoverpasswordStudent = async(req,res) => {
   console.log(req.params.password);
   try{
      const password = req.params.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const student = await studentModel.findOneAndUpdate(
         { email: req.params.email },
         { $set: { password: hashedPassword } },
         { new: true }
       );

       res.status(200).json({message:"Password Reset Successful",success:true});
   }
   catch(error)
   {
      res.status(500).json("internal server error");
   }
}


const recoverpasswordGuide = async(req,res) => {
   try{
      const password = req.params.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const guide = await guideModel.findOneAndUpdate(
         { email: req.params.email },
         { $set: { password: hashedPassword } },
         { new: true }
       );

       res.status(200).json({message:"Password Reset Successful",success:true});
   }
   catch(error)
   {
      res.status(500).json("internal server error");
   }
}

const recoverpasswordCoordinator = async(req,res) => {
   try{
      const password = req.params.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const coordinator = await cordinatorModel.findOneAndUpdate(
         { email: req.params.email },
         { $set: { password: hashedPassword } },
         { new: true }
       );
       res.status(200).json({message:"Password Reset Successful",success:true});
   }
   catch(error)
   {
      res.status(500).json("internal server error");
   }
}

module.exports = {
   forgotpasswordstudentController,
   forgotpasswordguideController,
   forgotpasswordcoordinatorController,
   recoverpasswordCoordinator,
   recoverpasswordGuide,
   recoverpasswordStudent
};
