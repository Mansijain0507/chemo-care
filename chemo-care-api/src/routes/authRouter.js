const express = require("express");
const { login, register } = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
