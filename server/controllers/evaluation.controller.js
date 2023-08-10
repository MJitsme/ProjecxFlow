const express = require("express");
const app=express()
const evaluationModel = require("../models/evaluation.model");

const evaluationabstractController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { abstract: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationdiaryController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { diary: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationsddController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { sdd: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationsrsController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { srs: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationimplementationController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { implementation: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationpptController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: req.params.projectId },
            { $set: { ppt: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}

const evaluationreportController = async(req,res) => {
    try
    {
        const eval = await evaluationModel.findOneAndUpdate(
            { project: request.params.projectId },
            { $set: { report: req.body.mark }, $inc: { total: req.body.mark } },
            { new: true }
          );
        if(!eval)
        {
            res.status(204).json("project not found for evaluation");
        }
        res.status(200).json("Marking succesfull");
    }
    catch(error)
    {
        res.status(500).json("Internal server error");
    }
}


const totalmarkController = async(req,res) =>{
    const eval = await evaluationModel.findOne({project:req.params.projectId});
    if(!eval)
    {
        res.status(204).json("project not found");
    }
    const totalmark = eval.total;
    res.status(200).json({message:"total mark returned",success:true,totalmark:totalmark});

}


module.exports = {
    evaluationabstractController,
    evaluationdiaryController,
    evaluationimplementationController,
    evaluationpptController,
    evaluationreportController,
    evaluationsddController,
    evaluationsrsController,
    totalmarkController
}
