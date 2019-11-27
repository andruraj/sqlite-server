// const sqlite3 = require("sqlite3");
// const db = new sqlite3.Database("testDB");

// class DataBase {
//   constructor() {
//     console.log("create");
//     db.serialize(() => {
//       db.run(
//         `CREATE TABLE IF NOT EXISTS projects (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             description TEXT,
//             isComplete INTEGER DEFAULT 0
//             );`,
//         (res, err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("Table create successfully");
//             console.log(res);
//           }
//         }
//       );

//       db.run(
//         `INSERT INTO projects (name, description, isComplete)
//           VALUES (?, ?, ?)`,
//         ("test", "test proj", 1),
//         (res, err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(res);
//           }
//         }
//       );

//       db.run(`SELECT * FROM projects`, (res, err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(res);
//         }
//       });
//     });
//   }

//   test() {
//     console.log("test");
//   }

//   getAll() {
//     console.log("getall");
//     return new Promise((resolve, reject) => {
//       db.run(`SELECT * FROM projects`, (res, err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   }

//   get(id) {
//     console.log("get");
//     return new Promise((resolve, reject) => {
//       db.run(`SELECT * FROM projects WHERE id = ${id}`, (result, err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   }

//   insert(name, desc, isComplete) {
//     console.log("insert");
//     return new Promise((resolve, reject) => {
//       db.run(
//         `INSERT INTO projects (name, description, isComplete)
//           VALUES (?, ?, ?)`,
//         // VALUES (${name}, ${desc}, ${isComplete})`,
//         [name, desc, isComplete],
//         (res, err) => {
//           if (err) {
//             reject(err);
//           } else {
//             db.run(`SELECT * FROM projects`, (res, err) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(res);
//               }
//             });
//             resolve(res);
//           }
//         }
//       );
//     });
//   }
// }

// module.exports = DataBase;
const DBase = require("./main");
const db = new DBase();
