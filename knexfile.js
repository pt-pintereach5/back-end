// Update with your config settings.

module.exports = {

  development: {
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
};
