const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, function (err) {
        
    }).catch(err => console.log(err));
}