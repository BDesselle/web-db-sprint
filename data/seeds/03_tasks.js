exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      project_id: 1,
      task_description: "Open VScode",
      task_notes: "Open VScode",
      task_completion: false
    },
    {
      id: 2,
      project_id: 1,
      task_description: "?",
      task_notes: "?",
      task_completion: false
    },
    {
      id: 3,
      project_id: 1,
      task_description: "Profit",
      task_notes: "Profit",
      task_completion: false
    },
    {
      id: 4,
      project_id: 2,
      task_description: "Open VScode",
      task_notes: "Open VScode",
      task_completion: false
    },
    {
      id: 5,
      project_id: 2,
      task_description: "?",
      task_notes: "?",
      task_completion: false
    },
    {
      id: 6,
      project_id: 2,
      task_description: "Profit",
      task_notes: "Profit",
      task_completion: false
    },
    {
      id: 7,
      project_id: 3,
      task_description: "Open VScode",
      task_notes: "Open VScode",
      task_completion: false
    },
    {
      id: 8,
      project_id: 3,
      task_description: "?",
      task_notes: "?",
      task_completion: false
    },
    {
      id: 9,
      project_id: 3,
      task_description: "Profit",
      task_notes: "Profit",
      task_completion: false
    }
  ]);
};
