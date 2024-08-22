const User=require("../models/user")
const bcrypt=require("bcryptjs")
const userSignup=async(req,res)=>{
try{
  const {username,email,password}=req.body;
  let user=await user.findone({email})
  if(user){
    res.status(400).json({message:"user already exists"})
  }
  user=new User({username,email,password})
  await user.save();
  res.status(201).json({message:'User created successfully'})
}   
catch(error){
    res.status(500).json({message:error})
}
}
const userSignin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=User.findone({email})
        if(!user){
            res.status(400).json({message:"invalid credentials"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(400).json({message:'invalid credentials'})
        }
        res.status(200).json({message:'login successful'})
    }
    catch(error){
    res.status(500).json({message:error})
    }
}