
exports.seed = async (knex) => {
  await knex("resources").insert([
    { name: "CEO", description: "Remodeling", completed: false
    },
    { name: "Meeting Room", description: "Talk about what needs to be done for this project", completed: false
    },
  ])
};