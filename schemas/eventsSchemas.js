const Joi = require("joi");

const eventRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
});

module.exports = {
  eventRegisterSchema,
}