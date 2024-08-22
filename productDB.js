require("dotenv").config()
const connectDb = require("./db/connect")
const Product=require('./models/product')
const data=require('./products.json')
const start= async ()=>{
    try{
    await connectDb(process.env.mongodb_url)
    await Product.deleteMany()
    await Product.create(data)
    console.log('data loaded successfully')
    }
    catch(error){
    console.log(error)
    }
}


start()