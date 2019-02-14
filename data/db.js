const knex = require('knex');
require('dotenv').config();

const envType = process.env.DB_ENV || 'development';

const config = require('../knexfile.js')[envType];

module.exports = knex(config);
