require("dotenv").config()
const express= require('express')
const app=express()
const router_product = require('./Routers/product')
const router_user=require('./Routers/user')
const PORT=process.env.PORT||5000
const connectDb=require('./db/connect')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hi this / page')
})

app.use('/api/product',router_product)
app.use('/api/user',router_user)
const start = async ()=>{   
    try{
        await connectDb(process.env.mongodb_url)

    app.listen(PORT,()=>{
        console.log(`server connected at port number ${PORT}`)
    })
    }
    catch(error){
        console.log(error,'this is error')
    }
} 

start();