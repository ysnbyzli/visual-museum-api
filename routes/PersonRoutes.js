const express = require("express");

const personController = require("../controller/PersonController");

const router = express.Router();

router.get("/", personController.index);
router.post("/", personController.create);
router.patch("/:id", personController.update);
router.delete("/:id", personController.delete);

module.exports = router;
