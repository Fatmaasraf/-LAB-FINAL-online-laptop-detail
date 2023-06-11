const User=require('../models/User')

exports.addUser=async(req,res)=>{
    await User.create(req.body)
    res.json({message:"user added succesas fuly",})
}
exports.getAllUsers=async(req,res)=>{
    const users=await User.find()
    res.json(users)
}


