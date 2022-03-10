//only for api requests
const express = require("express");

require("dotenv").config();

const connectDB = require("./models/connectDB");

const app = express();

const router = require("./routes/router");

//trigger connect to db function
connectDB();

//mw for req.body
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("I am listening ");
});
