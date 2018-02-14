const Sequelize=require('sequelize')
var db;
if(process.env.DATABASE_URL){
db=new Sequelize(process.env.DATABASE_URL,{
    dialect:'postgres',
    protocol:'postgres',
    logging:false
})
}
else{
db=new Sequelize('survey','survey','survey',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        max:5,
        min:5
    },
   
})
}
const posts=db.define('posts',{
    data:Sequelize.DataTypes.STRING,
    heading:Sequelize.DataTypes.TEXT
    

})
const users=db.define('users',{
    email:Sequelize.DataTypes.STRING,
    password:Sequelize.DataTypes.STRING
})
db.sync()
.then(()=>{
    console.log("db started")
})
.catch((err)=>{
console.log(err)
})
exports=module.exports={
    posts,users
}