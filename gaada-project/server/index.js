var express = require("express");
var db = require("../database");

var port = 3001
var app = express();

const Item = require('../database/item.js')
const User = require('../database/user.js')

app.use(express.json())
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));



app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
