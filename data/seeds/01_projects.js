exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      project_name: "Build DApp",
      project_description: "Build a decentralized app with Blockstack",
      project_completion: false
    },
    {
      id: 2,
      project_name: "Do Laundry",
      project_description: "Do laundry",
      project_completion: true
    },
    {
      id: 3,
      project_name: "Maintain Google Assistant App",
      project_description: "Maintain Google Assistant App",
      project_completion: false
    }
  ]);
};
