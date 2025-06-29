"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const userController_1 = require("./app/controllers/userController");
// todo
// --global error handler and route mismatch error handle setup
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/users', userController_1.userRoute);
app.get('/', (req, res) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Management App</title>
</head>
<body style="margin:0; padding:20px; font-family:Arial, sans-serif; background-color:#f0f2f5; color:#333;">

  <div style="max-width:600px; margin:50px auto; background:#fff; padding:30px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.1); text-align:center;">
    <h1 style="font-size:28px; color:#2c3e50; margin-bottom:10px;">Welcome to User Management App</h1>
    <p style="font-size:16px; color:#555;">Manage your users with ease and simplicity.</p>
  </div>

</body>
</html>`;
    res.send(html);
});
exports.default = app;
