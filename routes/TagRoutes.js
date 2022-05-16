const express = require("express");

const TagController = require("../controller/TagController");

const router = express.Router();

router.route("/").get(TagController.index);
router.route("/:id").get(TagController.findTagById);
router.route("/").post(TagController.create);
router.route("/:id").delete(TagController.delete);
router.route("/:id").patch(TagController.update);

router.get("/", TagController.index);

module.exports = router;
