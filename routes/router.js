const express = require("express");

const router = express.Router();

//only api endpoint
router.get("/", (req, res) => {
  console.log("api page");
  res.send("api page");
});
module.exports = router;
//another import method
//exports.router=express.Router()
