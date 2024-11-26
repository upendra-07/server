const {
  userSignIn,
  getUserByUserNameOrEmail,
  userAuthenticated,
} = require("./signIn.controllers");

const signInResolvers = {
  Mutation: {
    userSignIn: userSignIn,
  },
  Query: {
    userAuthenticated: userAuthenticated,
    getUserByUserNameOrEmail: getUserByUserNameOrEmail,
  },
};

module.exports = signInResolvers;
