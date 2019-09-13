const express = require("express");
const helmet = require("helmet");
/* const recipesRouter = require("./routes/recipes/recipesRouter"); */
const app = express();

const PORT = process.env.PORT || 4000;

//* Middleware
app.use(helmet());
app.use(express.json());

//* Routes
/* app.use("/api/recipes", recipesRouter); */

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT} ...`)
);
