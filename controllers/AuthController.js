const User = require("../models/UserModel");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //TODO
  //-validate the fields
  //-validate the fields
  //-crypt password
  //-save user to db

  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  await user.save();

  res.send("register completed");
};
exports.authLogin = (req, res) => {
  res.send("register completed");
};
