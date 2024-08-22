const express=require('express')
const bcrypt=require("bcryptjs")
const user=express()
const {userSignup,userSignin}=require('../Controller/user')
user.route('/signup').post(userSignup)
user.route('/signin').post(userSignin)
module.exports=user