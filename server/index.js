const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./router/router"));
const conn = require("./db/connection");
const port = 3001;

conn.then((db) => {
  if (!db) return process.exit(1);

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
});
