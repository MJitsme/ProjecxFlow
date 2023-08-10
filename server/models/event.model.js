// event.model.js

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
   teamId: {
      type: String,
      required: true,
   },
   date: {
      type: String,
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
