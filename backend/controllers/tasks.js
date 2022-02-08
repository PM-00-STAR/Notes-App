const Task = require('../models/Tasks')

/*
        The Backend will provide these API endpoints :---
        1.) Get All Tasks
        2.) Get Single Task
        3.) Create Task
        4.) Update Task
        5.) Delete Task
*/

const getAllTasks = async (req,res) => {
    //res.send('get all tasks')
    try{
        const tasks = await Task.find({})//find({}) will return all the documnents of the Task collection
        //res.status(200).json({tasks:tasks})
        res.status(200).json({success:true,totalSize:tasks.length,tasks:tasks})//ES6 mei shorthand chal jata hai {tasks:tasks} aur {tasks} ek hi baat hain
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res) => {
    //res.send('get single task')
    //res.json({id:req.params.id})
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){//task null aya MongoDb se
            return res.status(404).json({msg:`No task with id ${taskID}`})//not found
        }
        res.status(200).json({ task })
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task)
            return res.status(404).json(`bhai aisa koi task hi nahi hai: ${taskID}`)
        res.status(200).json({ task })
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});//E! why '_' before 'id'  --> MongoDB ke default document variables start with '_' and _id is one of them
        if(!task){
            return res.status(404).json({msg:`Aisa toh koi task hi nahi hai jiski id = ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}