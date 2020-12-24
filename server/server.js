const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "esesssssssssssss" });
});

app.listen(8085, () => {
  console.log("Baxk end is ready bro!");
});
