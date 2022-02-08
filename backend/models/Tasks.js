//This will define the Notes/Task Schemas for our DB
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name field is required'],
        trime:true,
        maxlength:[128,'At max 128 characters are allowed in name'],
    },
    category:{//todo :#### Check if its possible in frontend or not ?
        type:String,
        required:true,
        trim:true,
        maxlength:64,
    },
})

module.exports = mongoose.model('Task',TaskSchema)//In Task collection of DB this Schema will be assigned