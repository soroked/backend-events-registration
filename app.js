const express = require("express");
const cors = require("cors");
require("dotenv").config();

const eventsRouter = require("./routes/api/eventsRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/events", eventsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err
  res.status(status).json({ message });
})

module.exports = app;