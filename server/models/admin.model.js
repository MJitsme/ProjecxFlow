const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: [true, "Username should be present"],
      },
      password: {
         type: String,
         required: [true, "Password should be present"],
      },
   },
   { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
