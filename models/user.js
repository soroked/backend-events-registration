const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/,
  },
  eventHeard: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'event',
  },
},
{
  versionKey: false,
  timestamps: true,
})

userSchema.post("save", handleMongooseError)

const userRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  eventHeard: Joi.string(),
});

const User = model("user", userSchema);

module.exports = {
  User,
  userRegisterSchema, 
};