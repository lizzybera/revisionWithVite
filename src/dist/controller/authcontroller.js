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
exports.SigninAuth = exports.getOneAuth = exports.viewAuth = exports.createAuth = void 0;
const mainError_1 = require("../error/mainError");
const authModel_1 = __importDefault(require("../model/authModel"));
const createAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const auth = yield authModel_1.default.create({ name, email });
        res.status(mainError_1.HTTP.CREATE).json({
            message: "created",
            data: auth
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error"
        });
    }
});
exports.createAuth = createAuth;
const viewAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = yield authModel_1.default.find();
        res.status(mainError_1.HTTP.OK).json({
            message: "found",
            data: auth
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error"
        });
    }
});
exports.viewAuth = viewAuth;
const getOneAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authID } = req.params;
        const auth = yield authModel_1.default.findById(authID);
        res.status(mainError_1.HTTP.OK).json({
            message: "found",
            data: auth
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error"
        });
    }
});
exports.getOneAuth = getOneAuth;
const SigninAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const auth = yield authModel_1.default.findOne({ email });
        res.status(mainError_1.HTTP.OK).json({
            message: "welcome home",
            data: auth._id
        });
    }
    catch (error) {
        res.status(mainError_1.HTTP.BAD).json({
            message: "Error"
        });
    }
});
exports.SigninAuth = SigninAuth;
