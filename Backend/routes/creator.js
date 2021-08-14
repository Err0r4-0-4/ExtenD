const { Router } = require("express");
const express = require("express");
const creatorController = require("../controllers/creator");

const route = express.Router();

route.post("/signup", creatorController.signup);
route.post("/login", creatorController.login);
route.post("/creatorById", creatorController.getCreatorById);
route.get("/creators", creatorController.getCreators);
route.post("/createMerchandise", creatorController.createMerchandise);
route.post("/uploadContract", creatorController.uploadContract);
route.post("/getContracts", creatorController.getContracts);
module.exports = route;
