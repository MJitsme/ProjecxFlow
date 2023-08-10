const express = require("express");
const projectModel = require("../models/project.model");

const searchController = async (req, res) => {
   try {
      const searchQuery = req.body.searchQuery;

      // Perform the search using the searchQuery
      const projects = await projectModel.find({
         title: { $regex: searchQuery, $options: "i" },
         abstract: { $exists: true },
      });

      // Generate the cards based on the search results
      const cards = projects.map((project) => {
         if (!project || !project.title) {
            return {
               id: "N/A",
               title: "Title not found",
               // Add other relevant properties from the project model
            };
         }
         const team = project.team;

         return {
            id: project._id,
            title: project.title,
            type: project.type,
            year: project.year,
            team: project.team,
            // Add other relevant properties from the project model
         };
      });

      console.log(cards);
      res.status(200).send({ success: true, results: cards });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: `Search error: ${error.message}`,
      });
   }
};

module.exports = { searchController };
