import express, { Request, Response } from "express"
import { HTTP } from "../error/mainError"
import todoModel from "../model/todoModel";

export const createTodo = async (req : Request, res : Response) =>{
    try {
        const {userID} = req.params;
        const {task} = req.body;

        const todo = await todoModel.create({task, userID})
        res.status(HTTP.CREATE).json({
            message : "created",
            data : todo
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const viewtodo = async (req : Request, res : Response) =>{
    try {
        const todo = await todoModel.find()
        res.status(HTTP.OK).json({
            message : "found",
            data : todo
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const getOnetodo = async (req : Request, res : Response) =>{
    try {
        const {todoID} = req.params
        const todo = await todoModel.findById(todoID)
        res.status(HTTP.OK).json({
            message : "found",
            data : todo
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const deletetodo = async (req : Request, res : Response) =>{
    try {
        const {todoID} = req.params
        const todo = await todoModel.findByIdAndDelete(todoID)
        res.status(HTTP.OK).json({
            message : "deleted",
            data : todo
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}