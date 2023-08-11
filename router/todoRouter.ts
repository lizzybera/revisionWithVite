import express, { Router } from 'express'
import { createTodo, deletetodo, viewtodo } from '../controller/todocontroller'

const router = Router()

router.route("/task").get(viewtodo)
// router.route("/onetask").get(getOnetodo)
router.route("/:userID/create").post(createTodo)
router.route("/:todoID/delete").delete(deletetodo)

export default router