const express=require('express')
const path=require('path')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/api',require('./api'))
app.listen(2020,()=>{
    console.log("started the base")
})