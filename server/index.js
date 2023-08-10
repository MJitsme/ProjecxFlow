const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectdb = require("./config/db.config");
const cors = require("cors");

const userRoute = require("./routes/user.route");
const pdfRoute = require("./routes/pdf.routes");

const app = express();
connectdb();

app.use(cors());
dotenv.config();

//middleware

app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/pdf", pdfRoute);

app.get("/", (req, res) => {
   res.send("hello world");
});

const port = process.env.PORT;

app.listen(port, () => {
   console.log(`SERver running in port ${port} `);
});
