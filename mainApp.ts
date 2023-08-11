import express, { Application, NextFunction, Request, Response} from "express"
import cors from "cors"
import { HTTP, mainError } from "./error/mainError"
import { errorHandler } from "./error/errorBuilder"
import auth from "./router/authRouter"
import todo from "./router/todoRouter"

export const mainApp = (app : Application)=>{
    app.use(express.json())
        .use(cors(
            {
                origin : [" http://127.0.0.1:5173"," https://todo-revision-vite.vercel.app"],
                methods: ["GET", "POST", "PATCH", "DELETE"]
            }
        ))

        // .use("", (req : Request, res : Response)=>{
        //     try {
        //         return res.status(HTTP.OK).json({
        //             message : "Good to GO!"
        //         })
        //     } catch (error) {
        //         return res.status(HTTP.BAD).json({
        //             message : "Error"
        //         })
        //     }
        // })

        app.use("/api/v1", auth)
        app.use("/api/v1", todo)
       
        app.all("*", (req : Request, res : Response, next : NextFunction)=>{
            new mainError({
                name : "Route Error",
                message : "This is showing up because this route isnt correct",
                status : HTTP.BAD,
                sucess : false
            })
        })
        
        app.use(errorHandler)
}