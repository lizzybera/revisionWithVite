import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import taskModel from "../model/todoModel";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { task } = req.body;

    const auth = await taskModel.create({
      task,
      userID,
    });

    console.log(auth);

    res.status(HTTP.OK).json({
      message: "created",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};

export const viewtodo = async (req: Request, res: Response) => {
  try {
    const auth = await taskModel.find();

    res.status(HTTP.OK).json({
      message: "found",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};

export const deletetodo = async (req: Request, res: Response) => {
  try {
    const { todoID } = req.params;

    const auth = await taskModel.findByIdAndDelete(todoID);

    res.status(HTTP.OK).json({
      message: "delete one",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};
