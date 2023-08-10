const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
   {
      announcement: {
         type: String,
         required: [true],
      },
      date: {
         type: String,
         required: [true],
      },
   },
   { timestamps: true }
);

const Announcement = mongoose.model("announcement", announcementSchema);

module.exports = Announcement;
