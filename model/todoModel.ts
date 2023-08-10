import mongoose from "mongoose";

interface iTodo {
    task? : string,
    userID : string;
}

interface iTodoData extends iTodo, mongoose.Document {}

const todoModel = new mongoose.Schema({
    task : {
        type : String,
    },
    userID : {
        type : String,
    },
}, {timestamps : true})

export default mongoose.model<iTodoData>("todos", todoModel)