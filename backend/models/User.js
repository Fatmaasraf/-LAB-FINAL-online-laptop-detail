const mongoose =require('mongoose')
const {Schema} =mongoose

const userSchema=new Schema({

    A_Username:{
        type:String
    },
   
    A_Password:{
        type:String
    },
    A_AcountNumber:{
        type:String
    }
})

module.exports=mongoose.model('User',userSchema)