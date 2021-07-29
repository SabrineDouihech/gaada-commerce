var express = require("express");
var db = require("../database");

var port = 3001
var app = express();

const Item = require('../database/item.js')
const User = require('../database/user.js')

app.use(express.json())
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));


app.get('/users', (req, res)=>{
  User.find({}, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.get('/items', (req, res)=>{
  Item.find({}, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.get('/login', (req, res)=>{
  User.find(
    {email: req.body.email,
     password: req.body.passord
    }, 
    function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.post('/signup', function(req, res){
  User.create(
  {username: req.body.username,
   password: req.body.password,
   email: req.body.email
  }, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.get('/items/:type', (req, res)=>{
  Item.find({itemType: req.params.type}, (err, result)=>{
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
