const express= require('express');
const path = require('path');
const mongoose = require('mongoose');
const { check, validationResult } = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require('passport');
let Article = require('./models/article');
const config = require('./config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open',()=>{
    console.log('sucessfuly connected to db');
})

db.on('error',(err)=>{
    console.log(err);
})

// init app
const app = express();

// Load view engine
app.set('views',path.join(__dirname ,'views'));
app.set('view engine' , 'pug');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.get('*',(req, res,next)=>{
    res.locals.user = req.user || null;
    next();
})

app.get('/' ,(req,res)=>{
    Article.find({},(err,articles)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.render('index',{
            title: 'Articles',
            articles:articles
        })
    });
});

app.use('/articles',require('./routes/articles'));
app.use('/users',require('./routes/users'));


// Start server
app.listen(8000,(e)=>{
    if(e){
        console.log(e);
        return;
    }
    console.log('Server is running at port 8000!!!');
});