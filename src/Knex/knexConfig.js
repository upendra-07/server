require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.user_name, // replace with your PostgreSQL username
      host: process.env.host,
      database: process.env.db_name, // replace with your database name
      password: process.env.password, // replace with your PostgreSQL password
      port: process.env.port, // default PostgreSQL port
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
