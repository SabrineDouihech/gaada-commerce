const db = require('./index.js')
const User = require('./user.js')

sampleUsers = [
    {
        name: "jess",
        password: "jess000",
        email: "jess@gmail.com",
        image: ""
    },
    {
        name: "aziz",
        password: "aziz000",
        email: "aziz@gmail.com",
        image: ""
    },
    {
        name: "sabrin",
        password: "sabrin000",
        email: "sabrin@gmail.com",
        image: ""
    },
    {
        name: "mohsen",
        password: "mohsen000",
        email: "mohsen@gmail.com",
        image: ""
    }
]


const insertSampleUsers = function(){
    User.create(sampleUsers)
    .then(() => db.disconnect()).catch(err=> console.log(err));
};

insertSampleUsers();