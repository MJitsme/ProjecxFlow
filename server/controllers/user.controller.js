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

const loginadminController = async (req, res) => {
   try {
      const user = await adminModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(404)
            .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
         return res
            .status(204)
            .send({ message: "invalid email or password", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      });
      res.status(200).send({
         message: "Login successful",
         success: true,
         token: token,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `login error ${error.message}`,
      });
   }
};

const signupadminController = async (req, res) => {
   try {
      const existingUser = await adminModel.findOne({
         username: req.body.username,
      });
      if (existingUser) {
         return res
            .status(200)
            .send({ message: "user already exists", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new adminModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register success", success: true });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const loginstudentController = async (req, res) => {
   console.log(req.body.email);
   console.log(req.body.password);
   try {
      const user = await studentModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
         return res
            .status(204)
            .send({ message: "invalid email or password", success: false });
      }
      const studentId = user._id;
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      });
      res.status(200).send({
         message: "Login successful",
         success: true,
         token: token,
         studentId: studentId,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const loginguideController = async (req, res) => {
   try {
      const user = await guideModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
         return res
            .status(204)
            .send({ message: "invalid email or password", success: false });
      }
      const guideId = user._id;
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      });

      res.status(200).send({
         message: "Login successful",
         success: true,
         token: token,
         guideId: guideId,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `login error ${error.message}`,
      });
   }
};

const logincordinatorController = async (req, res) => {
   try {
      const user = await cordinatorModel.findOne({ email: req.body.email });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
         return res
            .status(204)
            .send({ message: "invalid email or password", success: false });
      }
      const guideId = user._id;
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "1d",
      });

      res.status(200).send({
         message: "Login successful",
         success: true,
         token: token,
         guideId: guideId,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const signupstudentController = async (req, res) => {
   try {
      const existingUser = await studentModel.findOne({
         email: req.body.email,
      });
      if (existingUser) {
         return res
            .status(200)
            .send({ message: "user already exists", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new studentModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register success", success: true });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const signupguideController = async (req, res) => {
   try {
      const existingUser = await guideModel.findOne({ email: req.body.name });
      if (existingUser) {
         return res
            .status(200)
            .send({ message: "user already exists", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new guideModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register success", success: true });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const signupcordinatorController = async (req, res) => {
   try {
      const existingUser = await cordinatorModel.findOne({
         email: req.body.name,
      });
      if (existingUser) {
         return res
            .status(204)
            .send({ message: "user already exists", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new cordinatorModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register success", success: true });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `signup error ${error.message}`,
      });
   }
};

const authstudentController = async (req, res) => {
   try {
      const user = await studentModel.findOne({ _id: req.body.userId });
      if (!user) {
         return res
            .status(200)
            .send({ message: "user not found", success: false });
      } else {
         // const userdata = await
         res.status(200).send({
            success: true,
            data: {
               id: user.id,
               name: user.name,
               phoneno: user.phoneno,
               email: user.email,
               college: user.college,
               dept: user.dept,
               sem: user.sem,
               admno: user.admno,
               rollno: user.rollno,
               regno: user.regno,
               password: user.password,
               answer: user.answer,
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

const authguideController = async (req, res) => {
   try {
      const user = await guideModel.findOne({ _id: req.body.userId });
      if (!user) {
         return res
            .status(200)
            .send({ message: "user not found", success: false });
      } else {
         // const userdata = await
         res.status(200).send({
            success: true,
            data: {
               id: user.id,
               name: user.name,
               phoneno: user.phoneno,
               email: user.email,
               college: user.college,
               dept: user.dept,
               password: user.password,
               fid: user.fid,
               answer: user.answer,
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

const authcordinatorController = async (req, res) => {
   try {
      const user = await cordinatorModel.findOne({ _id: req.body.userId });
      if (!user) {
         return res
            .status(204)
            .send({ message: "user not found", success: false });
      } else {
         // const userdata = await
         res.status(200).send({
            success: true,
            data: {
               id: user.id,
               name: user.name,
               phoneno: user.phoneno,
               email: user.email,
               college: user.college,
               dept: user.dept,
               password: user.password,
               fid: user.fid,
               answer: user.answer,
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

module.exports = {
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
};

/* const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')


const loginController = async (req,res)=> {
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch)
        {
            return res.status(200).send({message:"invalid email or password", success:false})

        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
        
        res.status(200).send({message:'Login successful', success: true, token:token, isAdmin:user.isAdmin})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
    
    }
    
  
}
const signupController = async (req,res)=> {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser)
        {
            return res.status(200).send({message:'user already exists',success:false})
        }
        const password=req.body.password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password= hashedPassword
        const newUser= new userModel(req.body)
        await newUser.save()
        res.status(201).send({message:'Register success',success:true});
        
     }catch(error)
     {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
     }

}


const authController = async (req,res)=>{
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        if(!user)
        {
            return res.status(200).send({message:'user not found', success:false}) 
        }
        else{
           // const userdata = await 
            res.status(200).send({success:true, data :{
                name:user.name,
                email:user.email,
                uid:user.ashaid,
                //isAdmin:user.isAdmin
            },
        })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({message:' authentication error', success:false,error})
    }

}
module.exports= { loginController,signupController,authController} */
