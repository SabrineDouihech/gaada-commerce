const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const ItemSchema = new mongoose.Schema(
    {
        itemName: String,
        itemDescription: String,
        itemType: String,
        imageUrl: String,
        price: Number,
        quantity: Number
        
    }
    )
    
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
