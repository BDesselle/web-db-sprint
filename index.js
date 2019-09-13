const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const projectsRouter = require("./projects/projectsRouter");
const resourcesRouter = require("./resources/resourcesRouter");
const tasksRouter = require("./tasks/tasksRouter");
const app = express();

const PORT = process.env.PORT || 4000;

//* Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

//* Routes
app.use("/api/projects", projectsRouter);
app.use("/api/resources", resourcesRouter);
app.use("/api/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT} ...`)
);
