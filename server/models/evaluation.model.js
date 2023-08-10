const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
   {
      project:  {
         type: String,
         required: [true],
      },
      abstract: {
         type: Number,
         required: [true],
      },
      diary: {
         type: Number,
         required: [true],
      },
      srs: {
         type: Number,
         required: [true],
      },
      sdd: {
         type: Number,
         required: [true],
      },
      report: {
         type: Number,
         required: [true],
      },
      implementation: {
         type: Number,
         required: [true],
      },
      ppt: {
         type: Number,
         required: [true],
      },
      total: {
         type: Number,
         required: [true],
      },
   },
   { timestamps: true }
);

const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = Evaluation;
