const express = require('express');
const router = express.Router();

let Article = require('../models/article');

let User = require('../models/user');

router.delete('/:id',(req,res)=>{
    if(!req.user_id){
        res.status(500).send();
    }
    let query = {_id:req.params.id};

    Article.findById(req.params.id , (err ,article)=>{
        if(article.author!= req.user._id){
            res.status(500).send();
        }else{
             Article.remove(query,(err)=>{
        if(err){
            console.log(err);
        }
        res.send('Success');
    })
        }
    })
   
})

router.get('/edit/:id',(req,res)=>{
    Article.findById(req.params.id ,(err , article)=>{
        if(err){console.log(err); return;}
        console.log(article);
        res.render('edit_article',{
            title: 'Edit Article',
            article: article
        })
    })
})
router.post('/edit/:id',(req,res)=>{
    if(article.author!= req.user){
        req.flash('danger','Not authorized');
        res.redirect('/');
    }
    let article = {};
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;
    let query = {_id: req.params.id};
    Article.update(query,article,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('/');
    })
    
})

router.get('/add' ,ensureAuthenticated,(req,res)=>{
    return res.render('add_article',{
        title: 'add article'
    })
})
router.post('/add',ensureAuthenticated,(req,res)=>{
    let article = new Article();
    article.title = req.body.title;
    article.author = req.user._id;
    article.body = req.body.body;

    article.save((err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.flash('success',"Article added successfuly");
        return res.redirect('/');
    })
    
})
router.get('/:id',(req,res)=>{
    Article.findById(req.params.id ,(err , article)=>{
        if(err){console.log(err); return;}
    User.findById(article.author,(err , user)=>{
        res.render('article',{
            article: article,
            author: user.name
        })
    })
    })
})

function ensureAuthenticated(req ,res ,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('danger','Please login');
        res.redirect('/users/login');
    }
}
module.exports = router;