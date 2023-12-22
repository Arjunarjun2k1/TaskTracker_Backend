const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true },
    title: String,
    status: {
        type: String,
        enum: ['not started', 'started', 'completed'],
        default: 'not started',
    },
    startTime: Date,
    completionTime: Date,
});
  
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
