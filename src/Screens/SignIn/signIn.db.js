const TABLE_NAMES = require("../../Tables/tables");
const db = require("../../Knex/knex");

const getUserByUserIdentifier = async (userIdentifier) => {
  try {
    const user = await db(TABLE_NAMES.USERS)
      .select("*")
      .where("userName", userIdentifier)
      .orWhere("email", userIdentifier)
      .first(); // Assuming you expect only one user
    return user; // Return user.Id if user exists, else return null
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

module.exports = { getUserByUserIdentifier };
