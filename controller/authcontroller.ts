import express, { Request, Response } from "express"
import { HTTP } from "../error/mainError"
import authModel from "../model/authModel";

export const createAuth = async (req : Request, res : Response) =>{
    try {
        const {name, email} = req.body;

        const auth = await authModel.create({name, email})
        res.status(HTTP.CREATE).json({
            message : "created",
            data : auth
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const viewAuth = async (req : Request, res : Response) =>{
    try {
        const auth = await authModel.find()
        res.status(HTTP.OK).json({
            message : "found",
            data : auth
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const getOneAuth = async (req : Request, res : Response) =>{
    try {
        const {authID} = req.params
        const auth = await authModel.findById(authID)
        res.status(HTTP.OK).json({
            message : "found",
            data : auth
        })
    } catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}

export const SigninAuth = async (req : Request, res : Response) =>{
    try {
        const {email} = req.body
        const auth = await authModel.findOne({email})

        res.status(HTTP.OK).json({
            message : "welcome home",
            data : auth!._id
        })
       
        
    }catch (error) {
        res.status(HTTP.BAD).json({
            message : "Error"
        })
    }
}