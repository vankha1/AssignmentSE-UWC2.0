require('dotenv').config()
const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb+srv://tatcatrithuc:vankha123@cluster0.pbwoixc.mongodb.net/uwc2', {
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