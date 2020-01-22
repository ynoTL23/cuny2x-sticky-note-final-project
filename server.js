const express = require("express");
const db = require("./backend/config/database");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/notes", require("./backend/routes/index"));

const port = process.env.PORT || 5000;

app.listen(port, res =>
  console.log(`Server successfully listening on port: ${port}`)
);
