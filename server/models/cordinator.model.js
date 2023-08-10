const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: [true, "Email should be present"],
      },
      name: {
         type: String,
         required: [true, "Username should be present"],
         unique: true,
      },
      password: {
         type: String,
         required: [true, "password field should be present"],
      },
      phoneno: {
         type: Number,
         required: [true, "phone number field should be present"],
      },
      college: {
         type: String,
         required: [true, "college field should be present"],
      },
      dept: {
         type: String,
         required: [true, "department field should be present"],
      },
      fid: {
         type: Number,
         required: [true, "fid should be present"],
      },
      answer: {
         type: String,
         required: [true, "answer field should be present"],
      },
   },
   { timestamps: true }
);

const Coordinator = mongoose.model("coordinator", coordinatorSchema);

module.exports = Coordinator;
