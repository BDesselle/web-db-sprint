const db = require("../data/dbConfig");

module.exports = {
  createResource,
  getResources
};

function createResource(body) {
  return db("resources")
    .insert(body)
    .then(response => {
      return response;
    });
}

function getResources() {
  return db("resources");
}
