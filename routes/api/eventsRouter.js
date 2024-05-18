const express = require("express");

const ctrl = require("../../controllers/eventsController");

const router = express.Router();

router.get("/", ctrl.getEvents);

router.get("/:id", ctrl.getEventByID);

router.post("/:id/registration", ctrl.registerToEvent);

module.exports = router;