const mongoose = require("mongoose");
const mongoURL = "";

const connectToMongo = async()=>{
    try{
        mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully");
    }catch(err){
        console.log(err);
    }
};
module.exports = connectToMongo;