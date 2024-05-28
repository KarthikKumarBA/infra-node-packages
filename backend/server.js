"use strict";

var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');
require('dotenv').config();
var app = express();
app.use(cors());
app.use(express.json());
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});
db.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});
app.post('/signup', function (req, res) {
  var sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  var values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], function (err, data) {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});
app.post('/login', function (req, res) {
  var sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], function (err, data) {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});
app.get('/loginData', function (req, res) {
  var sql = "SELECT * FROM login";
  db.query(sql, function (err, data) {
    if (err) {
      return res.status(500).json({
        error: 'Error retrieving data from the database'
      });
    }
    return res.json(data);
  });
});
app.listen(8081, function () {
  console.log("listening");
});
