require('dotenv').config()
const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!!!")
    }
    catch{
        console.log("Connect failure!!!");
    }
}

module.exports = {connect};