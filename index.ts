import express, {Application} from "express"
import mongoose from "mongoose"
import { mainApp } from "./mainApp"
import dotenv from "dotenv"
dotenv.config()

const app : Application = express()
const port : number  =parseInt(process.env.APPLICATION_PORT!)

mainApp(app)

const url  : string = process.env.DB!

const server = app.listen(process.env.PORT || port, ()=>{
    mongoose.connect(url).then(()=>{
        console.log("connected");
    })
})

process.on("uncaughtException", (error : any) =>{
    console.log("server is shutting down due to uncaughtException");
    console.log(error);

    process.exit(1)
})

process.on("unhandledRejection", (reason : any) =>{
    console.log("server is shutting down due to unhandledRejection");
    console.log(reason);

    server.close(()=>{
        process.exit(1)
    })
})