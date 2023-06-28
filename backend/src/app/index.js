const express=require('express')
const connectToMong=require('../../db')
const  cors=require('cors')
const router=require('../../router/userRoute')
connectToMong()
const app =express()
app.use(express.json())
const port=5000
app.use(cors())
app.use('/api',router)


app.listen(port,()=>{
    console.log(`app is runnig ${port}`)
})


