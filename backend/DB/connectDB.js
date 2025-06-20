const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>{
        console.log("DB is connected !!")
    }).catch(()=>{
        console.log("DB is not connected !!")
    })
}

module.exports = connectDB
