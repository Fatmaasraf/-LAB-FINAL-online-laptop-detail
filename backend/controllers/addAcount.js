const CreateAcount=require('../models/NewCreateAcount')

exports.newCreatProduct=async(req,res)=>{
    console.log(req.body)
    await CreateAcount.create(req.body)
    res.json({message:"Acount info added successfuly"})
}
exports.getAllCreateAcount=async(req,res)=>{
    const CreateAcount=await CreateAcount.find()
    res.json(CreateAcount)
}



