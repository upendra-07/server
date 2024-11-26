const { gql } = require("apollo-server-express");

const singUpSchema = gql`
  type User {
    id: Int
    fullName: String
    email: String
    phone: String
    userName: String
    password: String
  }

  input userSignUpInput {
    fullName: String
    email: String
    userName: String
    password: String
  }

  type Mutation {
    createUser(input: userSignUpInput): User
  }
`;

module.exports = singUpSchema;
