exports.seed = async (knex) => {
  await knex("task").insert([
    { task_description: "Task 1 description", notes: "some notes..", completed: false
    },
    {task_description: "Task 2 description", notes:"write down notes..", completed: false
    },
    { task_description: "Task 3 description", notes:"show me your notes!", completed: false
    },
  ])
};