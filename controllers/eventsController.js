const Event = require("../models/event");
const { User } = require("../models/user")

const { HttpError, ctrlWrapper } = require("../helpers");

const getEvents = async (req, res) => {
  const result = await Event.find();
  res.json(result);  
}

const getUsers = async (req, res) => {
  const { id } = req.params;

  const users = await User.find({ event: id })

  res.json(users);
}

const registerToEvent = async (req, res) => {
  const { id: eventID } = req.params;
  const newUser = await User.create({ ...req.body, event: eventID });

  const { _id: userID } = newUser;
  const event = await Event.findById(eventID);

  event.participants.push(userID);
  await event.save();

  res.status(201).json(req.body);
}

module.exports = {
  getEvents: ctrlWrapper(getEvents),
  getUsers: ctrlWrapper(getUsers),
  registerToEvent: ctrlWrapper(registerToEvent),
}