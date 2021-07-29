const db = require('./index.js')
const Item = require('./item.js')

const sampleItems = [
    {
        itemName: "bike",
        itemDescription: "it goes",
        itemType: "bike?",
        imageUrl: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/05/29/12/best-bikes-online.png?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart",
        price: 69,
        quantity: 21
    },
    {
        itemName: "car",
        itemDescription: "it goes but faster",
        itemType: "car?",
        imageUrl: "https://static.autox.com/uploads/2020/12/maruti-suzuki-swift.jpg",
        price: 666,
        quantity: 2
    },
    {
        itemName: "guitar",
        itemDescription: "its an instrument lmao",
        itemType: "music?",
        imageUrl: "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg",
        price: 420,
        quantity: 1
    },
    {
        itemName: "toy",
        itemDescription: "its a toy",
        itemType: "play ",
        imageUrl: "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg",
        price: 22,
        quantity: 3
    }
]

const insertSampleItems = function(){
    Item.create(sampleItems)
    .then(() => db.disconnect()).catch(err=> console.log(err));
};

insertSampleItems();