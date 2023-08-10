"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainError = exports.HTTP = void 0;
var HTTP;
(function (HTTP) {
    HTTP[HTTP["OK"] = 200] = "OK";
    HTTP[HTTP["CREATE"] = 201] = "CREATE";
    HTTP[HTTP["BAD"] = 404] = "BAD";
})(HTTP = exports.HTTP || (exports.HTTP = {}));
class mainError extends Error {
    constructor(args) {
        super(args.message);
        this.sucess = false;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = args.name;
        this.message = args.message;
        this.status = args.status;
        if (this.sucess !== undefined) {
            this.sucess = args.sucess;
        }
        Error.captureStackTrace(this);
    }
}
exports.mainError = mainError;
