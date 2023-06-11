const mongoose =require('mongoose')
const {Schema} =mongoose

const userSchema=new Schema({

    fname:{
        type:String
    },
    pass:{
        type:String
    },
    address:{
        type:String
    },
    
})

module.exports=mongoose.model('Suser',userSchema)