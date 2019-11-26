// main.js

const Promise = require("bluebird");
const AppDB = require("./db");
const ProjectRepository = require("./project_repository");
const TaskRepository = require("./task_repository");

function main() {
  const db = new AppDB("./database.sqlite3");
  const blogProjectData = { name: "Write Node.js - SQLite Tutorial" };
  const projectRepo = new ProjectRepository(db);
  const taskRepo = new TaskRepository(db);
  let projectId;

  projectRepo
    .createTable()
    .then(() => taskRepo.createTable())
    .then(() => projectRepo.create(blogProjectData.name))
    .then(data => {
      projectId = data.id;
      const tasks = [
        {
          name: "Outline",
          description: "High level overview of sections",
          isComplete: 1,
          projectId
        },
        {
          name: "Write",
          description: "Write article contents and code examples",
          isComplete: 0,
          projectId
        }
      ];
      return Promise.all(
        tasks.map(task => {
          const { name, description, isComplete, projectId } = task;
          return taskRepo.create(name, description, isComplete, projectId);
        })
      );
    })
    .then(() => projectRepo.getById(projectId))
    .then(project => {
      console.log(`\nRetreived project from database`);
      console.log(`project id = ${project.id}`);
      console.log(`project name = ${project.name}`);
      return projectRepo.getTasks(project.id);
    })
    .then(tasks => {
      console.log("\nRetrieved project tasks from database");
      return new Promise((resolve, reject) => {
        tasks.forEach(task => {
          console.log(`task id = ${task.id}`);
          console.log(`task name = ${task.name}`);
          console.log(`task description = ${task.description}`);
          console.log(`task isComplete = ${task.isComplete}`);
          console.log(`task projectId = ${task.projectId}`);
        });
      });
      resolve("success");
    })
    .catch(err => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
}

main();
