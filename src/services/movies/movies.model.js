const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");

Joi.objectId = objectId;
const schema = Joi.object({
  title: Joi.string().min(5).max(10).required(),
  genreId: Joi.objectId().required(),
  dailyRentalRate: Joi.number().min(0).max(10).required(),
  numberInStock: Joi.number().min(0).max(50).required(),
  liked: Joi.boolean().default(false),
});

module.exports = schema;
