class ProjectRepository {
  constructor(appdb) {
    this.appdb = appdb;
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT)`;
    return this.appdb.run(sql);
  }

  create(name) {
    return this.db.run("INSERT INTO projects (name) VALUES (?)", [name]);
  }

  update(project) {
    const { id, name } = project;
    return this.db.run(`UPDATE projects SET name = ? WHERE id = ?`, [name, id]);
  }

  delete(id) {
    return this.db.run(`DELETE FROM projects WHERE id = ?`, [id]);
  }

  getById(id) {
    return this.db.get(`SELECT * FROM projects WHERE id = ?`, [id]);
  }

  getAll() {
    return this.db.all(`SELECT * FROM projects`);
  }

  getTasks(projectId) {
    return this.db.all(`SELECT * FROM tasks WHERE projectId = ?`, [projectId]);
  }
}

module.exports = ProjectRepository;
