const routes = require("express").Router();
const controller = require("../controllers/controller");

routes.route("/api").get(controller.getData);

module.exports = routes;
