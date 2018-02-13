const route=require('express').Router()
const posts=require('./db').posts
const users=require('./db').users

route.post('/login',(req,res)=>{
    res.send(req.body.email+" "+req.body.password)

})
route.post('/register',(req,res)=>{
   users.create({
       email:req.body.email,
       password:req.body.password
   }) 
   .then((user)=>{
       res.send(user)
   })
   .catch((err)=>{
       res.send(err)
   })
})
route.get('/posts',(req,res)=>{
    posts.findAll()
    .then((posts)=>{
        res.send(posts)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.post('/posts',(req,res)=>{
    posts.create({
        data:req.body.data,
        heading:req.body.heading
    })
    .then((post)=>{
        res.send(post)
    })
    .catch((err)=>{
        res.send(err)
    })
})
exports=module.exports=route