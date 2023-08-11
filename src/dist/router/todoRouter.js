"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todocontroller_1 = require("../controller/todocontroller");
const router = (0, express_1.Router)();
router.route("/task").get(todocontroller_1.viewtodo);
// router.route("/onetask").get(getOnetodo)
router.route("/:userID/create").post(todocontroller_1.createTodo);
router.route("/:todoID/delete").delete(todocontroller_1.deletetodo);
exports.default = router;
