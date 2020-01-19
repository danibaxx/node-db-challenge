const db = require('../data/db-config');

function find() {
  return db('resources').select()
};

function findById(id) {
  return db('resources')
    .where({ id })
    .first()
};

async function add(data) {
  const [id] = await db('resources')
  .insert(data)
  return db('resources')
    .where({ id })
    .first()
};


module.exports = {
  find,
  findById,
  add,
};