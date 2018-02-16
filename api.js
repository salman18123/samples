const route=require('express').Router()
const posts=require('./db').posts
const users=require('./db').users
const jwt=require('jsonwebtoken')

route.post('/login',(req,res)=>{
    users.findOne({
        where:{
            email:req.body.email
        }
    })
    .then((users)=>{
        if(!users){
            res.send({msg:"not a valid user"})
        }
        
        console.log(users.password)
        if(req.body.password!==users.password){
            res.send({error:"incorrect password"})
        }
        res.send({user:users,token:jwt.sign({data:users},'secret',{expiresIn:24*24*60*7})})
    })
    .catch((err)=>{
        res.send({error:"no such user exists"})
    })

    

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
    posts.create(req.body)
    .then((post)=>{
        res.send(post)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.get('/:postid',(req,res)=>{
    posts.findById(req.params.postid)
    .then((post)=>{
        res.send(post)
    })
    .catch((err)=>{
        res.send({error:err})
    })
})
route.put('/:postid',(req,res)=>{
    posts.update(req.body,{
        where:{
            id:req.params.postid
        }
    })
    .then((post)=>{
        res.send(post)
    })
    .catch((err)=>{
        res.send(err)
    })
})
route.delete('/:postid/delete',(req,res)=>{
    posts.destroy({
        where:{
            id:req.params.postid
        }
    })
    .then((data)=>{
        res.send({msg:"deleted item"})
    })
    .catch((err)=>{
        res.send({error:err})
    })
})
exports=module.exports=route