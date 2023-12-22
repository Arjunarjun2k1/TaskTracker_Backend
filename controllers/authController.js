const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const tokenList = require('../index')

exports.signIn = async(req,res)=>{
    const {email} = req.body
    try{
        let userData = await User.find({email})
        if(userData.length==0){
            let newUser = await User.create({
                name:req.body.name,
                email:req.body.email,
                image:req.body.image
            })
            const token =jwt.sign({id:newUser._id},'srjfejrhfvherhfberhjfjherjhbrejhfbjhrfrehj')
            res.status(200).json({
                status:'success',
                data:[{id:newUser._id,name:newUser.name,email:newUser.email,image:newUser.image,token}]
            })
        }else{
            const token =jwt.sign({id:userData[0]._id},'srjfejrhfvherhfberhjfjherjhbrejhfbjhrfrehj')
            res.status(200).json({
                status:'success',
                data:[{id:userData[0]._id,name:userData[0].name,email:userData[0].email,image:userData[0].image,token}]
            })
        }
        
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
    
}

exports.logout = async(req,res)=>{
    const {token} = req.body;
    tokenList.blacklist.add(token);

    res.status(200).json({
        status:'succcess',
        message:'Token expired'
    })
}