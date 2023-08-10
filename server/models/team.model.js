const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true],
      },
      type: {
         type: String,
         required: [true],
      },
      coordinator: {
         type: String,
         required: [true],
      },
      guide: {
         type: String,
         required: [true],
      },
      member1: {
         type: String,
         required: [true],
      },
      member2: {
         type: String,
         required: [true],
      },
      member3: {
         type: String,
         required: [true],
      },
      member4: {
         type: String,
         required: [true],
      },
      year: {
         type: String,
         required: [true],
      },
   },
   { timestamps: true }
);

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
