const express = require('express')
const app = express()
const port = 3000
const tasks = require('tasks')


//      MiddleWares :--
app.use(express.json())

//todo : write a function to start the app
const start = async () => {
    try{
        //todo : connect MongoDB here only after whole skeleton of app is done
        app.listen(port,console.log(`app is listening at port: ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}

start()//This will start our node app