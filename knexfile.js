// Update with your config settings.
require('dotenv').config();

const pg = require('pg')

  if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnauthorized: false }
  }

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DEV_DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.TESTING_DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};
