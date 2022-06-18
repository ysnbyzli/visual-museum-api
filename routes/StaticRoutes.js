const express = require("express");
const StaticController = require("../controller/StaticController");

const router = express.Router();

router.route("/all-count").get(StaticController.getAllCountStatics);
router
  .route("/persons/category-count")
  .get(StaticController.getPersonsByCategoriesCount);

module.exports = router;
