exports.seed = async (knex) => {
  await knex("projects_tasks").insert([
    { projects_id: 1, task_id: 1 },
    { projects_id: 1, task_id: 2 },
    { projects_id: 1, task_id: 3 },
    { projects_id: 2, task_id: 1 },
    { projects_id: 2, task_id: 2 },
    { projects_id: 2, task_id: 3 },
    { projects_id: 3, task_id: 1 },
    { projects_id: 3, task_id: 2 },
    { projects_id: 3, task_id: 3 },
  ])
}
