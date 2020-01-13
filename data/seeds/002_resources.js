
exports.seed = async (knex) => {
  await knex("resources").insert([
    {resource_name: "CEO", resource_description: "Remodeling", projects_id: 1
    },
    {resource_name: "Meeting Room 1", resource_description: "Project planning", projects_id:2
    },
    {resource_name: "Meeting Room 2", resource_description: "Finalizing project", projects_id:3
    },
  ]);
};