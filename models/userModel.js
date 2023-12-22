const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'A user must have a usename']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'A user must have an email']
    },
    image:{
        type:String,
        required:[true,'A user must have a profile pic']
    }
});
  
const User = mongoose.model('User', userSchema);

module.exports = User;
