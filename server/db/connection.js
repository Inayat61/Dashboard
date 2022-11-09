const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });
const conn = mongoose
  .connect(
    "mongodb+srv://admin:parAdmin123@dummycluster.ogmcdxq.mongodb.net/dummyDb?retryWrites=true&w=majority"
  )
  .then((db) => {
    console.log("Connected to Database");
    return db;
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = conn;
