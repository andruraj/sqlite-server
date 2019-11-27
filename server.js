const express = require("express");
const Data = require("./main");
const db = new Data();
const app = express();

app.get("/projects/all", (req, res) => {
  db.getall()
    .then(val => res.send(val))
    .catch(err => console.log(err));
});

app.get("/projects/:id", (req, res) => {
  db.get(req.params.id)
    .then(val => res.send(val))
    .catch(err => console.log(err));
});

app.post("/add", (req, res) => {
  const { name, desc, completed } = req.body;
  db.add(name, desc, completed)
    .then(val => res.send(val))
    .catch(err => console.log(err));
});

app.post("/update", (req, res) => {
  const { id, name, desc, completed } = req.body;
  db.update(id, name, desc, completed)
    .then(val => res.send(val))
    .catch(err => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  db.delete(req.params.id)
    .then(val => res.send(val))
    .catch(err => console.log(err));
});

app.listen(8000, () => console.log("Server running on PORT 8000"));
