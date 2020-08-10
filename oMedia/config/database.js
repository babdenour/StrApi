module.exports = ({ env }) => ({
  defaultConnection: "monPostgres",
  connections: {
    monPostgres: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DB_HOST", ".env"),
        port: 5432,
        username: env("DB_USERNAME", ".env"),
        password: env("DB_PASSWORD", ".env"),
        database: env("DB_NAME", ".env"),
        schema: "public",
      },
      options: {},
    },
  },
});
