const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


let User = require('../models/user');

router.get('/register' , (req,res)=>{
    res.render('register');
})

router.post('/register' ,(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    if(password!=password2){
        return res.redirect('register');
    }
    let newUser = new User({
        name:name,
        email: email,
        username: username,
        password: password
    })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) console.log(err);
          newUser.password = hash;
          newUser.save((err) => {
            if (err) {
              console.log(err);
              return;
            } else {
              req.flash("success", "You are now registered and can log in");
              res.redirect("/users/login");
            }
          });
        });
      });
})

router.get('/login',(req,res)=>{
    return res.render('login');
})

router.post('/login',(req,res ,next)=>{
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/users/login',
        failureFlash:true
    })(req,res,next);
})

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success','You are logged out');
    res.redirect('/users/login');
})

module.exports = router;