// task_repository.js

class TaskRepository {
  constructor(appdb) {
    this.appdb = appdb;
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          description TEXT,
          isComplete INTEGER DEFAULT 0,
          projectId INTEGER,
          CONSTRAINT tasks_fk_projectId FOREIGN KEY (projectId)
            REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
    return this.appdb.run(sql);
  }

  create(name, description, isComplete, projectId) {
    return this.db.run(
      `INSERT INTO tasks (name, description, isComplete, projectId)
        VALUES (?, ?, ?, ?)`,
      [name, description, isComplete, projectId]
    );
  }

  update(task) {
    const { id, name, description, isComplete, projectId } = task;
    return this.db.run(
      `UPDATE tasks
      SET name = ?,
        description = ?,
        isComplete = ?,
        projectId = ?
      WHERE id = ?`,
      [name, description, isComplete, projectId, id]
    );
  }

  delete(id) {
    return this.db.run(`DELETE FROM tasks WHERE id = ?`, [id]);
  }

  getById(id) {
    return this.db.get(`SELECT * FROM tasks WHERE id = ?`, [id]);
  }
}

module.exports = TaskRepository;
