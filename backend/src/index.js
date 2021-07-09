const express = require("express");
const { addWord, getData } = require("./controllers/word.controller");
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", getData);
app.post("/addWord", addWord);

module.exports = { app };
