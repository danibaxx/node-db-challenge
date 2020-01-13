
exports.seed = async (knex) => {
  await knex("resources").insert([
    { resource_name: "CEO", resource_description: "Remodeling"
    },
    { resource_name: "Meeting Room", resource_description: "Talk about what needs to be done for this project"
    },
  ])
};