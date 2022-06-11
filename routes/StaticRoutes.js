const express = require("express");
const staticController = require("../controller/StaticController");

const router = express.Router();

router.route("/all-count").get(staticController.getAllCountStatics);

module.exports = router;
