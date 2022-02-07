const express = require('express')
const app = express()
const port = 3000
const tasks = require('tasks')
const connectDB = require('./db/connect')
require('dotenv').config()



//      MiddleWares :--
app.use(express.json())


app.use('/api/v1/tasks',tasks)//to direct correct url trhough tasks router

//todo : write a function to start the app
const start = async () => {
    try{
        //todo : connect MongoDB here only after whole skeleton of app is done
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`app is listening at port: ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}

start()//This will start our node app