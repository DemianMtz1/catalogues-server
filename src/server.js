const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const handlingError = require("./middlewares/errorMessage");

app.use(cors());
app.use(express.json());

app.use("/catalogue-app", routes);
app.use(handlingError);

module.exports = app;
