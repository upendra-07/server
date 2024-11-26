const { gql } = require("apollo-server-express");

const singInSchema = gql`
  type User {
    id: Int
    userName: String
    email: String
    phone: String
    password: String!
    token: String
    isAuthenticated: Boolean
  }

  input userSignInInput {
    userName: String
    email: String
    phone: String
    password: String!
  }

  type Query {
    users: [User!]!
    getUserByUserNameOrEmail(userName: String, email: String): User
    userAuthenticated(token: String): User
  }

  type Mutation {
    userSignIn(input: userSignInInput): User
  }
`;

module.exports = singInSchema;
