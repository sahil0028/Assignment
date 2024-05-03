const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    autoId:{type:Number,default:0},
    name:{type:String,default:''},
    email:{type:String,default:''},
    password:{type:String,default:''},
    createdAt:{type:Date,default:Date.now},
    status:{type:Boolean,default:true}
})

module.exports = mongoose.model('auth',authSchema)


