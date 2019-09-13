const db = require("../data/dbConfig");

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  getTasksByProjectId
};

function createProject(body) {
  return db("projects")
    .insert(body)
    .then(response => {
      return response;
    });
}

function getProjects() {
  return db("projects").then(response => {
    const completionConversion = response.map(project => {
      project.project_completion === 1
        ? (project.project_completion = true)
        : (project.project_completion = false);
      return project;
    });
    return completionConversion;
  });
}

function getProjectById(id) {
  return db("projects")
    .where({ id: id })
    .first()
    .then(result => {
      return getTasksByProjectId(id).then(res => {
        result.tasks = res;
        return result;
      });
    });
}

function getTasksByProjectId(id) {
  return db("tasks")
    .where({ project_id: id })
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
