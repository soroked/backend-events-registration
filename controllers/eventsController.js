const events = require("../events.js");

const { HttpError, ctrlWrapper } = require("../helpers");
const { eventRegisterSchema } = require("../schemas/eventsSchemas.js");

const getEvents = (req, res) => {
  res.json(events);  
}

const getEventByID = async (req, res) => {
  const { id } = req.params;
  const event = events.find((event) => event.id === id)
  if (!event) {
    throw HttpError(404, "Not Found");
  }
  res.json(event);  
}

const registerToEvent = (req, res) => {
  const { error } = eventRegisterSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  res.status(201).json(req.body);
}

module.exports = {
  getEvents: ctrlWrapper(getEvents),
  getEventByID: ctrlWrapper(getEventByID),
  registerToEvent: ctrlWrapper(registerToEvent),
}