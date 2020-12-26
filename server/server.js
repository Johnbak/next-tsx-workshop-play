const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express.Router();
const product = require("./models/product");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/uploaded"));
app.use(cors());

app.use("/api/v2/authen/", require("./api_authen"));
app.use("/api/v2/stock/", require("./api_stock"));

app.listen(8085, () => {
  console.log("Baxk end is ready bro!");
});
