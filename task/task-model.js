const db = require('../data/db-config');

function find(project_id) {
  return db("projects_tasks as pt")
    .join("project as p", "p.id", "pt.task_id")
    .where({ project_id })
    .select(
      "task.",
      "task.",
      "task.",
      "p.name"
    )
}

module.exports = {
  find,
};