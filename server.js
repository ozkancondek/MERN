//for api requests
const express = require("express");

const app = express();

const router = require("./routes/router");

app.use("/api", router);

const port = 5000;
const host = "localhost";

app.listen(port, host, () => {
  console.log("I am listening ");
});
