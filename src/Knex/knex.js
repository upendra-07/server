// src/knex.js
const knex = require("knex");
const knexConfig = require("./knexConfig");

const db = knex(knexConfig.development);

module.exports = db;
