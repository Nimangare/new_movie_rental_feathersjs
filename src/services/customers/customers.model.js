const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(5).max(50),
  phone: Joi.string().min(7).max(10).required(),
  isGold: Joi.boolean().default(false),
});

module.exports = schema;
