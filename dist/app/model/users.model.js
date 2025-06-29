"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(v);
            },
            message: function (props) {
                return `${props.value} is not valid email`;
            },
        },
    },
    isRegistered: { type: Boolean, required: true },
}, {
    versionKey: false,
});
exports.Users = (0, mongoose_1.model)('Users', usersSchema);
