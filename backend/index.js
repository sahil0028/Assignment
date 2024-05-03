const express = require('express')
const app=express()
const db = require('./db')
const cors = require('cors')

const Port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const authRoutes = require('./server/routes/authRoutes')

app.get('/',(req,res)=>{
    res.send('Welcome to server')
})

app.use('/auth',authRoutes)

app.listen(Port,(err)=>{
    if(err){
        console.log('error occured in server',err)
    }
    else{
        console.log('connected to port',Port)
    }
})
