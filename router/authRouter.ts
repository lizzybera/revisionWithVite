import express from 'express'
import { SigninAuth, createAuth, getOneAuth, viewAuth } from '../controller/authcontroller'

const router = express.Router()

router.route("/users").get(viewAuth)
router.route("/:authID/oneUser").get(getOneAuth)
router.route("/register").post(createAuth)
router.route("/signIn").post(SigninAuth)

export default router