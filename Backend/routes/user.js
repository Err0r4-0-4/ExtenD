const { Router } = require("express");
const express = require("express");
const userController = require("../controllers/user");

const route = express.Router();

route.post("/signup", userController.signup);
route.post("/login", userController.login);
module.exports = route;
