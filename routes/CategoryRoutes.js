const express = require("express");
const categoryController = require("../controller/CategoryController");

const router = express.Router();

router.route("/").get(categoryController.index);
router.route("/:id").get(categoryController.findCategoryById);
router.route("/").post(categoryController.create);
router.route("/:id").patch(categoryController.update);
router.route("/:id").delete(categoryController.delete);

module.exports = router;
