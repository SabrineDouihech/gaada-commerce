var express = require("express");
var db = require("../database");

var port = 3001
var app = express();




const Item = require('../database/item.js')
const User = require('../database/user.js')

app.use(express.json())
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));


app.get('/items', (req, res)=>{
  Item.find({}, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.get('/users', (req, res)=>{
  User.find({}, function(err, result){
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
   email: req.body.email,
   loggedin: req.body.loggedin
  }, function(err, result){
    if(err){
      res.status(400).send()
    } else {
      res.send(result)
    }
  })
})

app.post('/login', (req, res)=>{
  const email = req.body.email
  const password = req.body.password
  User.findOneAndUpdate({email, password},{loggedin:true}, (err, result)=>{
   if(!result){
    res.status(400).send(err)
   } else {
     res.send(result)
   }
  })
})

app.post('/api/item', async (req, res) =>{
  try{
    
   var user = await Item.create({
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    itemType: req.body.itemType,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    quantity: req.body.quantity
   })
   console.log(req.body.itemName)

   res.send(user)
  }
  catch(err){
    console.log(err)
  }
})

app.put('/api/user/:id', async (req, res) =>{
  try{
    
   var user = await User.findOneAndUpdate({
     id: req.params._id,
    image: req.body.image
    
   })

   res.send(user)
  }
  catch(err){
    console.log(err)
  }
})

app.delete('/items/:id', async(req,res)=>{
  try{
var item = await Item.findOneAndRemove(req.params._id)
console.log(req.params._id)
res.send(item)
  }
  catch(err){
    console.log(err)
  }
})


app.get('/user/loggedin', (req, res)=>{
  User.findOne({loggedin: true}, function(err, result){
    if (err){
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

app.get('/user/disconnect', (req, res)=>{
  User.findOneAndUpdate({loggedin: true}, {loggedin: false},(err, result)=>{
    if (err){
      res.send(err)
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
