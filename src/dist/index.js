"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const mainApp_1 = require("./mainApp");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.APPLICATION_PORT);
(0, mainApp_1.mainApp)(app);
const url = process.env.DB;
const server = app.listen(process.env.PORT || port, () => {
    mongoose_1.default.connect(url).then(() => {
        console.log("connected");
    });
});
process.on("uncaughtException", (error) => {
    console.log("server is shutting down due to uncaughtException");
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("server is shutting down due to unhandledRejection");
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
