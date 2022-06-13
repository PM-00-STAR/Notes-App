require('dotenv').config();
const mongoose = require('mongoose');

// mongoose.connect(MONGO_URI, { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false } , (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') } //callback function
//     else { console.log('Error in DB connection : ' + err) }
// });
const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false } , (err) => {
            if (!err) { console.log('MongoDB Connection Succeeded.') } //callback function
            else { console.log('Error in DB connection : ' + err) }
         });
 }



require('./student.model');
module.exports = connectDB