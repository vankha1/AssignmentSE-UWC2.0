const express = require("express");
const app = express();
const methodOverride = require('method-override') // convert post to put in server
const port = 3000;
const bodyparser = require("body-parser");

// const path = require('path');
const session = require("express-session");
const authRouter = require("./route/login_route");
const taskRouter = require('./route/task');
const staffRouter = require('./route/staff');

// Import model Collector
// const Collector = require('./model/Collector')

// Connect DB
const db = require('./config/db')
db.connect();


// body-parser is used to pass the incoming request in the middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


// allow to use ejs 
app.set('view engine', 'ejs') 

// allow access folder public
app.use(express.static(__dirname)); 

// include route
app.use('/login', authRouter);
app.use('/task', taskRouter);
app.use('/staff', staffRouter);

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

app.get('/', (req, res) => {
    res.render('login', {text:'Login System'});
})


app.get('/home-page', (req, res, next) => {
    res.render('index.ejs', {
        text: 'Home Page'
    })
    
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})