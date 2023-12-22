const Task = require('../models/taskModel')

module.exports.createTask = async(req,res)=>{
    try{
        let newtask = await Task.create({
            userId:req.body.userId,
            title:req.body.title
        })
        res.status(200).json({
            status:'success',
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}

module.exports.getTask = async(req,res)=>{
    try{
        let task = await Task.find({userId:req.params.id})
        res.status(200).json({
            status:'success',
            task:[...task]
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}

module.exports.editTask = async(req,res)=>{
    try{
        let updateTask = await Task.findByIdAndUpdate(req.params.id,req.body)
        console.log(updateTask)
        res.status(200).json({
            status:'success',
        })
    }catch(err){
        res.status(500).json({
            status:'failed',
            message:err.message
        })
    }
}