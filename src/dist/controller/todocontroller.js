"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetodo = exports.viewtodo = exports.createTodo = void 0;
const mainError_1 = require("../error/mainError");
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { task } = req.body;
        const auth = yield todoModel_1.default.create({
            task,
            userID,
        });
        console.log(auth);
        res.status(mainError_1.HTTP.OK).json({
            message: "created",
            data: auth,
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error",
        });
    }
});
exports.createTodo = createTodo;
const viewtodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = yield todoModel_1.default.find();
        res.status(mainError_1.HTTP.OK).json({
            message: "found",
            data: auth,
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error",
        });
    }
});
exports.viewtodo = viewtodo;
const deletetodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { todoID } = req.params;
        const auth = yield todoModel_1.default.findByIdAndDelete(todoID);
        res.status(mainError_1.HTTP.OK).json({
            message: "delete one",
            data: auth,
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error",
        });
    }
});
exports.deletetodo = deletetodo;
