const { db } = require('../../database/index');

const query = async (QUERY) => {
  const con = await db();
  return new Promise((res, rej) => {
    con.connect(function (error) {
      con.query(QUERY, function (err, result) {
        if (err) {
          con.end();
          rej(err);
          //   throw err;
        }
        con.end();
        res(result);
      });
    });
  });
};
module.exports = { query };
