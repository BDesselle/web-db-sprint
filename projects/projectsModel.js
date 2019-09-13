const db = require("../data/dbConfig");

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  getTasksByProjectId,
  getResourcessByProjectId
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

/* function getProjectById(id) {
  return db("projects")
    .where({ id: id })
    .first()
    .then(response => {
      return getTasksByProjectId(id).then(res => {
        response.tasks = res;
        return response;
      });
    });
} */

function getProjectById(id) {
  return db("projects")
    .where({ id: id })
    .first()
    .then(response => {
      return getTasksByProjectId(id).then(tasks => {
        response.tasks = tasks;
        return getResourcessByProjectId(id).then(resources => {
          response.resources = resources;
          return response;
        });
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

function getResourcessByProjectId(id) {
  return getOther(id).then(response => {
    return response.map(response => {
      return db("resources")
        .where({ id: response.resource_id })
        .then(response => {
          response.map(response => {
            console.log(response);
            return response;
          });
        });
    });
  });
}

function getOther(id) {
  return db("project_resources")
    .where({ project_id: id })
    .then(response => {
      return response;
    });
}
