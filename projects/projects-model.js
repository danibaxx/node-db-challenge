const db = require('../data/db-config');

function find() {
  return db('projects').select()
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first()
};

function findTask(projects_id) {
  return db('projects')
    .join(
      'task', 
      'task.id', 
      'task.projects_id'
    )
    .where({ projects_id })
    .select(
      'task.projects_id', 
      'task.task_description', 
      'task.notes', 
      'task.projects_id'
    )
};

async function add(data) {
  const [id] = await db('projects')
    .insert(data)
  return db('projects')
    .where({ id })
    .first()
};

module.exports = {
  find,
  findById,
  findTask,
  // findResources,
  add,
}