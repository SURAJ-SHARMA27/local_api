const product=require('../models/product')
const getAllProducts = async (req,res)=>{
    const {company,name} = req.query;
    const queryObject = {}
    if(company){
        queryObject.company=company;
        console.log(queryObject.company)
    }
    if(name){
        queryObject.name=name;
    }
    console.log(queryObject)

    const data= await product.find(queryObject);  
    res.status(200).json({data})
}

const getAllProductsTesting = async (req,res)=>{
    const data= await product.find(req.query);
    res.status(200).json({data})    
}
module.exports = {getAllProducts,getAllProductsTesting}
