const DBase = require("./testDB");
let db = new DBase();
db.create().catch(err => console.log(err));
db.insert("Test Project", "Testing database", 0)
  .then(res => console.log(res))
  .catch(err => console.log(err));
db.getAll()
  .then(data => console.log(data))
  .catch(err => console.log(err));
