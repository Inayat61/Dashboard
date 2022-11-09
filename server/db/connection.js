const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });
const conn = mongoose
  .connect(//key ////
  )
  .then((db) => {
    console.log("Connected to Database");
    return db;
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = conn;
