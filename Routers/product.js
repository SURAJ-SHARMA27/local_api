const express= require('express')
const router=express();

const {getAllProducts,getAllProductsTesting}=require('../Controller/product')
router.route('/').get(getAllProducts)
router.route('/testing').get(getAllProductsTesting)

module.exports=router;

