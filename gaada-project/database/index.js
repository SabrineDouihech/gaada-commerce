const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/commerce2';


const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true } );

  
module.exports = db;

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

