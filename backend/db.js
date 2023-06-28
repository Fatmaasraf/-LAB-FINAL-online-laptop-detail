const mongoose=require('mongoose')
// const mongoURL='mongodb://localhost:27017/LaptopStore'
const mongoURL='mongodb+srv://fatimaashraf0098:znag7sXHFB1ppBeo@cluster0.26pgriw.mongodb.net/?retryWrites=true&w=majority'
const connectToMong=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("conncted to mongo")
    })
}

module.exports =connectToMong;