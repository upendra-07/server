require("dotenv").config();
const express = require("express");
const { ApolloServer, AuthenticationError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const signInSchema = require("./Screens/SignIn/signIn.schema");
const signUpSchema = require("./Screens/SignUp/signUp.schema");
const signUpResolvers = require("./Screens/SignUp/signUp.resolvers");
const signInResolvers = require("./Screens/SignIn/signIn.resolvers");
const db = require("./Knex/knex"); // Import the Knex instance

async function startServer() {
  try {
    // Test the database connection
    await db.raw("SELECT 1+1 AS result");
    console.log("PostgreSQL connected...");

    const server = new ApolloServer({
      typeDefs: [signInSchema, signUpSchema],
      resolvers: [signInResolvers, signUpResolvers],
      introspection: true, // Enable introspection
      playground: true, // Enable GraphQL Playground
    });

    await server.start();

    const app = express();

    // Middleware for security headers, CORS, etc. can be added here

    server.applyMiddleware({ app, path: "/api" });

    app.listen({ port: 4000 }, () =>
      console.log("Server running at http://localhost:4000/api/v1/graphql")
    );
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
}

startServer();
