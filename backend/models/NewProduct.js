const mongoose =require('mongoose')
const {Schema} =mongoose

const productSchema=new Schema({


    P_name:{
        type:String,
        
    },
    P_price:{
        type:String,
        
    },
    P_quantity:{
        type:String,
        
    },
    P_cat:{
        type:String,
        
    },
    P_images:{
        type:String,
        
    }
   
})

module.exports=mongoose.model('product',productSchema)