const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
// const mongoUri ="mongodb://0.0.0.0:27017/Notebook"
const mongoUri="mongodb+srv://shubhamfarainzi:Ex1OuXCt5tWw8oHB@cluster0.dxkisay.mongodb.net/Notebook?retryWrites=true&w=majority"
const connectToMongo= ()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("connected to mongoose successfully")
    })
}
module.exports= connectToMongo;