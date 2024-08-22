const express=require('express')
const user=express()
const {userSignUp,userSignIn}=require('../Controller/user')
user.route('/signup').post(userSignUp)
user.route('/sigin').post(userSignIn)
module.exports=user