const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/,
  },
  organizer: {
    type: String,
    required: true,
  },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }]
},
{
  versionKey: false,
  timestamps: true,
})

const Event = model("event", eventSchema);

module.exports = Event;