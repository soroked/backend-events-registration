const express = require("express");

const ctrl = require("../../controllers/eventsController");
const { userRegisterSchema } = require("../../models/user");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getEvents);

router.get("/participants/:id", ctrl.getUsers);

router.post("/registration/:id", validateBody(userRegisterSchema), ctrl.registerToEvent);

module.exports = router;