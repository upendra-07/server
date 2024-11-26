const TABLE_NAMES = require("./../../Tables/tables");
const db = require("./../../Knex/knex");

const createUserDB = async (input) => {
  try {
    // Insert input data into the users table
    const user = await db(TABLE_NAMES.USERS).insert(input).returning("*");
    // Optionally, you can return the created user or just a success message
    return user[0];
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

module.exports = {
  createUserDB,
};
