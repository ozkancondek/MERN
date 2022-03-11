const User = require("../models/UserModel");

const bcrypt = require("bcryptjs");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //TODO
  //-validate the fields
  //-validate the fields
  //-crypt password
  //-save user to db

  const salt = await bcrypt.genSalt(10);

  const newPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword,
  });
  await user.save();

  res.send("register completed");
};
exports.authLogin = (req, res) => {
  res.send("register completed");
};
