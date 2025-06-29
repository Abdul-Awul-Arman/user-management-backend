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
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const users_model_1 = require("../model/users.model");
exports.userRoute = express_1.default.Router();
//route for get all users
exports.userRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_model_1.Users.find();
        if (users.length === 0) {
            res.status(200).json({
                success: true,
                message: 'No user register yet',
                users,
            });
        }
        else {
            res.status(200).json({
                success: true,
                users,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}));
//route for create user
exports.userRoute.post('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const users = yield users_model_1.Users.create(body);
        res.status(201).json({
            createSuccess: true,
            message: 'User created successfully',
            users: users,
        });
    }
    catch (error) {
        if (error.errorResponse.code === 11000) {
            res.status(409).json({
                createSuccess: false,
                message: 'User already registered with this email ',
            });
        }
        else {
            res.status(400).json({
                createSuccess: false,
                message: 'Failed to create user',
                error: error.errorResponse.code,
            });
        }
    }
}));
//route for update user
exports.userRoute.patch('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query;
    const body = req.body;
    try {
        const user = yield users_model_1.Users.findOneAndUpdate(filter, body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            res.status(404).json({
                updateSuccess: false,
                message: 'User not found',
            });
        }
        else {
            res.status(200).json({
                updateSuccess: true,
                message: 'User updated successfully',
                user: user,
            });
        }
    }
    catch (error) {
        if (error.errorResponse.code === 11000) {
            res.status(409).json({
                updateSuccess: false,
                message: 'User already registered with this email ',
            });
        }
        else {
            res.status(400).json({
                updateSuccess: false,
                message: 'Failed to update user',
                error: error.errorResponse.code,
            });
        }
    }
}));
//route for delete user
exports.userRoute.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query;
    try {
        const user = yield users_model_1.Users.findOneAndDelete(filter, { new: true });
        if (!user) {
            res.json({
                deleteSuccess: false,
                message: 'User not found',
            });
        }
        else {
            res.json({
                deleteSuccess: true,
                message: 'User deleted successfully',
                user: user,
            });
        }
    }
    catch (error) {
        res.json({
            deleteSuccess: false,
            error: error.message,
        });
    }
}));
