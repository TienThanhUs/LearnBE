const express = require("express");
const Controller = require("../controller/auth.controller.js");

const route = express.Router();

route.post('/auth/login',Controller.AuthController);

module.exports = route;





