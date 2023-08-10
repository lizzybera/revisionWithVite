"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.errFile = void 0;
const mainError_1 = require("./mainError");
const errFile = (err, res) => {
    res.status(mainError_1.HTTP.BAD).json({
        name: err.name,
        message: err.message,
        status: err.status,
        success: err.sucess,
        stack: err.stack,
        err,
    });
};
exports.errFile = errFile;
const errorHandler = (err, req, res, next) => {
    (0, exports.errFile)(err, res);
};
exports.errorHandler = errorHandler;
