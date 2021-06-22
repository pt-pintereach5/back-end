// Update with your config settings.
require('dotenv').config();

const pg = require('pg')

  if (process.env.DATABASE_URL) {
    pg.defaults.ssl = { rejectUnautorized: false}
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
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA forign_keys = ON', done)
      },
    },
  },

  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: './articles.pg'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA forign_keys = ON', done)
      },
    },
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATA,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA forign_keys = ON', done)
      },
    },
  },
};
