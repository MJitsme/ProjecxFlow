const mongoose = require("mongoose");

const abstractSchema = new mongoose.Schema(
   {
      file: {
         type: String,
         required: [true, "Email should be present"],
      },
      year: {
         type: Number,
         required: [true, "Year should be present"],
      },
   },
   { timestamps: true }
);

const Abstract = mongoose.model("abstract", abstractSchema);

module.exports = Abstract;
