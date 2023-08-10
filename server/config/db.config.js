const mongoose = require("mongoose");
const path = require("path");
/*const dotenv = require("dotenv");
const root_dir = __dirname.split("server")[0];
dotenv.config({ path: path.join(root_dir, `.env`) });
const connectionString = process.env.MONGO_URI;
require('dotenv').config()*/

const connectionString =
   "mongodb+srv://user:test@cluster0.qzousud.mongodb.net/?retryWrites=true&w=majority";

function connectdb() {
   mongoose
      .connect(connectionString, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => {
         console.log("Connected to MongoDB successfully");
         // Continue with your application logic
      })
      .catch((error) => {
         console.error("Error connecting to MongoDB:", error);
         // Handle the error appropriately
      });
}

module.exports = connectdb;

