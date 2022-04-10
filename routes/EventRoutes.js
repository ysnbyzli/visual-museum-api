const express = require("express");
const eventController = require("../controller/EventController");

const router = express.Router();

router.route("/").get(eventController.index);
router.route("/").post(eventController.create);
router.route("/:id").patch(eventController.update);
router.route("/:id").delete(eventController.delete);

module.exports = router;
