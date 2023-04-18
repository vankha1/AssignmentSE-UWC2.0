const express = require("express");
const app = express();
const methodOverride = require('method-override') // convert post to put in server
const port = 3000;
const bodyparser = require("body-parser");

// const path = require('path');
const session = require("express-session");
const router = require("./route/login_route");

// Import model Collector
// const Collector = require('./model/Collector')
const Task = require('./model/Task')
const Staff = require('./model/Staff')

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
app.use('/login', router);


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

app.get('/task', (req, res, next) => {
    Task.find({})
            .then(tasks => res.render('task.ejs', {
                tasks: tasks,
                text: 'Dashboard'
            }))
            .catch(error => next(error));
})


app.post('/task/new-task', (req, res) => {
    const formBody = {...req.body};
    formBody.status = "Chưa diễn ra";
    const task = new Task(formBody);
    task.save();
    res.redirect('/task');
})
// [POST] /task/handle-form-actions
app.post('/task/handle-form-actions', (req,res, next) => {
    switch(req.body.action){
        case 'delete':
            Task.deleteMany({_id: {$in: req.body.taskIds}})
                .then(() => res.redirect('back'))
                .catch(next)
            break;
        default:
            res.redirect('/task')
    }
})


app.put('/task/:id', (req, res, next) => {
    Task.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next)
})

app.delete('/task/:id', (req, res, next) => {
    Task.deleteOne({_id: req.params.id})
        .then(() =>res.redirect('back'))
        .catch(next)
})


app.get('/task/:id/detail', (req, res, next) => {
    Promise.all([Task.findById(req.params.id), Staff.find({})])
        .then(([tasks, staffs]) => {
            res.render('detailTask', {
                tasks: tasks,
                staffs: staffs,
                text: 'Detail Task'
            })
        })
        .catch(next)
})



app.get('/staff', (req, res) => {
    Staff.find({})
            .then(staffs => res.render('staffInfo.ejs', {
                staffs: staffs,
                text: 'Staff'
            }))
            .catch(error => next(error));
})

app.get('/staff/:id', (req, res) => {
    Staff.findById({_id:req.params.id})
        .then(staffs => res.render('viewStaff.ejs', {
            staffs: staffs,
            text: 'View profile'
        }))
        .catch(error => next(error));
})

app.put('/staff/:id', (req, res, next) => {
    Staff.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('back'))
        .catch(next)
})

app.delete('/staff/:id', (req, res, next) => {
    Staff.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})