const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "cruddatabase",
});

app.use(bodyParser.urlencoded({ extended: True }));

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, res) => {});
});

app.listen(3001, () => {
  console.log("Server running");
});
