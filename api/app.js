const express = require("express");
const cors = require("cors");

const app = express();

const diaryRouter = require("./routes/diaryRoutes")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Diary API");
});

app.use("/diaries", diaryRouter)

module.exports = app
