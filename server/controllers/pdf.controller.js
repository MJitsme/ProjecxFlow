const { StatusCodes } = require("http-status-codes");
const uploadPdf = require("../utils/upload.utils");
const Project =require("../models/project.model");

const pdfabstractController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         abstract:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};

const pdfsrsController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         srs:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};




const pdfdiaryController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         diary:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};




const pdfsddController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         abstract:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};





const pdfpresentationController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         ppt:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};




const pdfreportController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         report:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};


const pdfimplementationController = async (req, res) => {
   try {
      const {projectId}=req.params;
      if(!projectId) res.status(StatusCodes.BAD_REQUEST).json({
         error:"prject id not found"
      })
      if (req.file.mimetype !== "application/pdf") {
         return res.status(400).json({
            message: "Only pdf files are allowed",
         });
      }
      const url = await uploadPdf(req.file.path);
      const project=await Project.findOneAndUpdate({_id:projectId},{
         implementation:url
      },{new:true})
      
      res.json({
         message:"uploaded",
         project,
      });
   } catch (error) {
      console.log(error);
   }
};


const viewabstractController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.abstract;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}


const viewdiaryController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.diary;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}


const viewsrsController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.srs;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}


const viewsddController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.sdd;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}


const viewpptController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.ppt;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}


const viewimplementationController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.implementation;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}



const viewreportController = async(req,res) =>{
   try{
      const project= await Project.findOne({_id:req.params.projectId})
      if(!project)
      {
         res.status(204).json("project not found");
      }
      const link=project.report;
      res.status(200).json(link);
   }
   catch(error){
      res.status(500).json("internal error");
   }
}





module.exports = {
   pdfabstractController,pdfpresentationController,pdfdiaryController,pdfreportController,pdfsddController,pdfsrsController,pdfimplementationController,viewabstractController,viewdiaryController,viewimplementationController,viewpptController,viewreportController,viewsddController,viewsrsController
};
