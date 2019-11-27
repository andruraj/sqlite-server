const sqlite3 = require("sqlite3");

class DataBase {
  constructor() {
    // open the database connection
    let db = new sqlite3.Database("newDB", err => {
      if (err) {
        console.error(err.message);
      }
    });

    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run("CREATE TABLE IF NOT EXISTS greetings(message text)")
        .run(
          `INSERT INTO greetings(message)
          VALUES('Hi'),
                ('Hello'),
                ('Welcome')`
        )
        .each(`SELECT message FROM greetings`, (err, row) => {
          if (err) {
            throw err;
          }
          console.log(row.message);
        });
    });

    // close the database connection
    db.close(err => {
      if (err) {
        return console.error(err.message);
      }
    });
  }
}

module.exports = DataBase;
