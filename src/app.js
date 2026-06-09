const express = require("express");

const schedulerRoutes = require("./routes/scheduler.routes");

const app = express();

app.use(express.json());

app.use("/api", schedulerRoutes);

module.exports = app;