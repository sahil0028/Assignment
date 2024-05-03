const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/assignment').then(()=>{
    console.log('Connected to db')
}).catch((err)=>{
    console.log('error occured in db',err)
})