

const mongoose = require('mongoose');

const RegSchema=new mongoose.Schema({
    username:{
        type:String
    },
    country:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    contact:{
        type:Number
    }

},{timestamps:true })

module.exports = mongoose.model('register', RegSchema)