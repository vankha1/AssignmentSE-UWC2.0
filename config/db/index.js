
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
    // try{
    //     await mongoose.connect('mongodb://localhost:27017/uwc_v2', {
    //         useNewUrlParser:true,
    //         useUnifiedTopology: true
    //     });
    //     console.log("Connect successfully!!!")
    // }
    // catch{
    //     console.log("Connect failure!!!");
    // }
}

module.exports = {connect};