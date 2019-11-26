const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("testDB");

export default class DBase {
  create() {
    return new Promise((resolve, reject) => {
      db.run(
        `CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            isComplete INTEGER DEFAULT 0`,
        (res, err) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      db.run(`SELECT * FROM projects`, (res, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      db.run(`SELECT * FROM projects WHERE id = ${id}`, (result, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  insert(name, desc, isComplete) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO tasks (name, description, isComplete)
          VALUES (?, ?, ?)`,
        [name, desc, isComplete],
        (res, err) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }
}

// module.exports = DBase;
