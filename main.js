const sqlite3 = require("sqlite3");
let db = new sqlite3.Database("newDB");
class SmallDB {
  create() {
    // open the database connection
    let db = new sqlite3.Database("newDB", err => {
      if (err) {
        console.error(err.message);
      }
    });

    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run(
        `CREATE TABLE IF NOT EXISTS projects(
          id INT PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          desc TEXT,
          completed NUMERIC DEFAULT 0
      )`
      ).each(`SELECT * FROM projects`, (err, row) => {
        if (err) {
          throw err;
          console.log(err);
        }
        console.log(row);
      });
    });

    // close the database connection
    db.close(err => {
      if (err) {
        return console.error(err.message);
      }
    });
  }

  getall() {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`select * from projects`, (err, rows) => {
          if (err) {
            // console.log(err);
            reject(err);
          } else {
            // console.log(rows);
            resolve(rows);
          }
        });
      });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`select * from projects where id = ${id}`, (err, rows) => {
          if (err) {
            // console.log(err);
            reject(err);
          } else {
            // console.log(rows);
            resolve(rows);
          }
        });
      });
    });
  }

  add(name, desc, completed) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(
          `INSERT INTO projects(name, desc, completed) VALUES('${name}', '${desc}', ${completed})`,
          (res, err) => {
            if (err) {
              reject(err);
            } else {
              resolve("Added successfully");
            }
          }
        );
      });
    });
  }

  update(id, name, desc, completed) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(
          `UPDATE projects SET name = ?, desc = ?, completed = ? WHERE id = ?`,
          [name, desc, completed, id],
          (res, err) => {
            if (err) {
              reject(err);
            } else {
              resolve("Updated successfully");
            }
          }
        );
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(`DELETE FROM projects WHERE id = ?`, [id], (res, err) => {
          if (err) {
            reject(err);
          } else {
            resolve("Deleted successfully");
          }
        });
      });
    });
  }
}

module.exports = SmallDB;
