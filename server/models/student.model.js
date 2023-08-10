const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
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
      sem: {
         type: Number,
         required: [true, "sem field should be present"],
      },
      admno: {
         type: String,
         required: [true, "admission no field should be present"],
      },
      rollno: {
         type: Number,
         required: [true, "roll number field should be present"],
      },
      regno: {
         type: String,
         required: [true, "register number field should be present"],
      },
      answer: {
         type: String,
         required: [true, "answer field should be present"],
      },
   },
   { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
