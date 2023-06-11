const Contact=require('../models/Contact')

exports.addContact=async(req,res)=>{
    await Contact.create(req.body)
    res.json({message:"Contact detail added succesas fuly",})
}
exports.getAllContacts=async(req,res)=>{
    const contacts=await Contact.find()
    res.json(contacts)
}


