const sql = require('mysql2');

module.exports.db = () => {
  return new Promise((resolve, reject) => {
    const connection = new sql.createConnection({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port:  process.env.DB_PORT,
      insecureAuth: true,
      multipleStatements: true,
    });
    resolve(connection);
  });
};