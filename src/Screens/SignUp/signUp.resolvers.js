const { createUser } = require("./signUp.controllers");

const signUpResolvers = {
  Mutation: {
    createUser: createUser,
  },
};

module.exports = signUpResolvers;
