exports.authRegister = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("fields: ", firstName, lastName, email, password);
  //TODO
  //-validate the fields
  //-validate the fields
  //-crypt password
  //-save user to db

  res.send("register completed");
};
exports.authLogin = (req, res) => {
  res.send("register completed");
};
