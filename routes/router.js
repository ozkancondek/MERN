const express = require("express");

const router = express.Router();

const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");
const BookRouter = require("./BookRouter");

/**
 * @route  /api/auth
 * @desc auth endpoint
 
*/
router.use("/auth", AuthRouter);
/**
 * @route  /api/profile
 * @desc profile endpoint
 
*/
router.use("/profile", AuthRouter);
/**
 * @route  /api/book
 * @desc book endpoint
 
*/
router.use("/book", AuthRouter);
module.exports = router;
//another import method
//exports.router=express.Router()
