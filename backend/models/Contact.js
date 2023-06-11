const mongoose =require('mongoose')
const {Schema} =mongoose

const contactSchema=new Schema({

    C_Name:{
        type:String
    },
   
    C_Email:{
        type:String
    },
    C_Message:{
        type:String
    }
})

module.exports=mongoose.model('Contact',contactSchema)