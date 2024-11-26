const { createUserDB } = require("./signUp.db");
const bcrypt = require("bcrypt");

const createUser = async (_, args) => {
  const { input } = args;
  const saltRounds = 10; // You can adjust the salt rounds as needed
  const hashedPassword = await bcrypt.hash(input.password, saltRounds);
  input.password = hashedPassword; // Store the hashed password
  return await createUserDB(input);
};

module.exports = {
  createUser,
};
