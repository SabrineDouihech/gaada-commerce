const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/commerce2';


const db = mongoose.connect(mongoUri, { useMongoClient :true } );

  
module.exports = db;


