const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();



//      MiddleWares :--
app.use(express.json())


//      Routes :----
app.use('/api/v1/tasks',tasks)//to direct correct url trhough tasks router
const port = process.env.PORT || 3000;


//todo : write a function to start the app
const start = async () => {
    try{
        //todo : connect MongoDB here only after whole skeleton of app is done
        await connectDB(process.env.MONGO_URI)
        app.listen(port,() => 
            console.log(`Server is listening on port ${port}...`)
        )
    }catch(error){
        console.log(error)
    }
}

start()//This will start our node app