const db = require("../data/dbConfig");

module.exports = {
  createTask,
  getTasks
};

function createTask(body) {
  return db("tasks")
    .insert(body)
    .then(response => {
      return response;
    });
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select("p.project_name", "p.project_description", "t.*")
    .then(response => {
      const completionConversion = response.map(task => {
        task.task_completion === 1
          ? (task.task_completion = true)
          : (task.task_completion = false);
        return task;
      });
      return completionConversion;
    });
}
