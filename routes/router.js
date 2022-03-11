const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const AuthRouter = require("./AuthRouter");
const ProfileRouter = require("./ProfileRouter");
const BookRouter = require("./BookRouter");

/**
 * @route  /api/auth
 * @desc auth endpoint
 
*/
router.use(
  "/auth",
  [
    check(
      //middleware
      "password",
      "please enter the password with 6 and more character"
    ).isLength({ min: 6 }),
    check(
      //middleware
      "email",
      "please enter a valid email"
    ).isEmail(),
  ],
  AuthRouter
);
/**
 * @route  /api/profile
 * @desc profile endpoint
 
*/
//router.use("/profile", AuthRouter);
/**
 * @route  /api/book
 * @desc book endpoint
 
*/
//router.use("/book", AuthRouter);
module.exports = router;
//another import method
//exports.router=express.Router()
