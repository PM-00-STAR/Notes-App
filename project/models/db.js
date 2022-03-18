const mongoose = require('mongoose');

// mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false } , (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') } //callback function
//     else { console.log('Error in DB connection : ' + err) }
// });
const connectDB = (url) => {
    return mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false } , (err) => {
            if (!err) { console.log('MongoDB Connection Succeeded.') } //callback function
            else { console.log('Error in DB connection : ' + err) }
         });
}



require('./Student.model');
module.exports = connectDB