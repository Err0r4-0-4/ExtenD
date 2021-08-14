const { Router } = require("express");
const express = require("express");
const creatorController = require("../controllers/creator");

const route = express.Router();

route.post("/signup", creatorController.signup);
route.post("/login", creatorController.login);
<<<<<<< HEAD
=======
route.get("/creatorById", creatorController.getCreatorById);
>>>>>>> 4d933fe7497cfeba3d7224a233f9044051b432df
route.get("/creators", creatorController.getCreators);
route.post("/createMerchandise", creatorController.createMerchandise);
module.exports = route;
