const express = require("express");
const router = express.Router();

const exampleAcc = [
    {
        email:"vovankha2003@gmail.com",
        password:"admin123"
    },
    {
        email:"tatcatrithuc@gmail.com",
        password:"123456"
    }
]

router.post('/', (req, res) => {
    exampleAcc.forEach((acc) => {
            if (req.body.email == acc.email && req.body.password == acc.password){
                res.redirect('/home-page');
            }   
        }
    )
})

module.exports = router;