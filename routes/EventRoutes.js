const express = require("express");
const eventController = require("../controller/EventController");

const router = express.Router();

router.route("/").get(eventController.index);
router.route("/:id").get(eventController.FindOneEventById);
router.route("/persons/:id").get(eventController.FindAllEventsByPersonId);
router.route("/").post(eventController.create);
router.route("/:id").patch(eventController.update);
router.route("/:id").delete(eventController.delete);

module.exports = router;
