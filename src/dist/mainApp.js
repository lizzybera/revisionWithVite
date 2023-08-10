"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mainError_1 = require("./error/mainError");
const errorBuilder_1 = require("./error/errorBuilder");
const authRouter_1 = __importDefault(require("./router/authRouter"));
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mainApp = (app) => {
    app.use(express_1.default.json())
        .use((0, cors_1.default)({
        origin: " http://127.0.0.1:5173",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }))
        .use("", (req, res) => {
        try {
            return res.status(mainError_1.HTTP.OK).json({
                message: "Good to GO!"
            });
        }
        catch (error) {
            return res.status(mainError_1.HTTP.BAD).json({
                message: "Error"
            });
        }
    });
    app.use("/api/v1", authRouter_1.default);
    app.use("/api/v1", todoRouter_1.default);
    app.all("*", (req, res, next) => {
        new mainError_1.mainError({
            name: "Route Error",
            message: "This is showing up because this route isnt correct",
            status: mainError_1.HTTP.BAD,
            sucess: false
        });
    });
    app.use(errorBuilder_1.errorHandler);
};
exports.mainApp = mainApp;
