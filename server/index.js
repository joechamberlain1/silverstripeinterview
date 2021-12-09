const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "MissionReady@2021",
  database: "silverstripe",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const coverletter = req.body.coverletter;
  const cv = req.body.cv;

  db.query(
    "INSERT INTO silverstripetable (name, coverletter, cv) VALUES (?,?,?)",
    [name, coverletter, cv],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running");
});
