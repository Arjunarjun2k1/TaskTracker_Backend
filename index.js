const express = require('express')
const env = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes')
const taskRouter = require('./routes/taskRoutes')
const blacklist = new Set();

const app = express()
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())

app.use((req,res,next)=>{
    console.log('Incoming')
    console.log(req.url)
    next()
})

app.use('/api/auth',authRouter)
app.use('/api/task',taskRouter)

mongoose.connect('mongodb+srv://arjunkk2k1:AiQzfuqXuqRLL4bv@cluster0.6ocaqmo.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log(`DB connection successfull`)
})

const port = 8000
app.listen(port,'localhost',()=>{
    console.log(`Listening on ${port}`)
})

module.exports=blacklist