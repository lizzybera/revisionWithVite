"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontroller_1 = require("../controller/authcontroller");
const router = express_1.default.Router();
router.route("/users").get(authcontroller_1.viewAuth);
router.route("/:authID/oneUser").get(authcontroller_1.getOneAuth);
router.route("/register").post(authcontroller_1.createAuth);
router.route("/signIn").post(authcontroller_1.SigninAuth);
exports.default = router;
