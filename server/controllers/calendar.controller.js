const eventModel = require("../models/event.model");

const calendargetAllEvents = async (req, res) => {
   try {
      const events = await eventModel.find({teamId:req.params.teamId});
      if(!events)
      {
         res.status(204).json({ message: "NO events yet!"});
      }
      res.json(events);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
   }
};

const calendarcreateEvent = async (req, res) => {
   try {

      const newEvent = await eventModel.create(req.body);
      console.log(newEvent);
      res.status(201).json(newEvent);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
   }
};

const calendardeleteEvent = async (req, res) => {
   try {
     const del = await eventModel.findOneAndDelete({_id:req.params.eventId})
     if(!del){
      res.status(204).json("event not found");
     }
      console.log(del);
      res.status(200).json("event deleted successfully");
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
   }
};

// Routes

module.exports = {
   calendarcreateEvent,
   calendardeleteEvent,
   calendargetAllEvents,
};
