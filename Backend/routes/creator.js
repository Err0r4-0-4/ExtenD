const { Router } = require("express");
const express = require("express");
const creatorController = require("../controllers/creator");
const isAuth = require("../Middleware/isAuth");
const route = express.Router();

route.post("/signup", creatorController.signup);
route.post("/login", creatorController.login);
route.post("/creatorById", isAuth, creatorController.getCreatorById);
route.get("/creators", creatorController.getCreators);
route.post("/createMerchandise", isAuth, creatorController.createMerchandise);
route.post("/getMerchandise", isAuth, creatorController.getMerchandiseByuserId);
route.post("/uploadContract", isAuth, creatorController.uploadContract);
route.post("/getContracts", isAuth, creatorController.getContracts);
module.exports = route;
