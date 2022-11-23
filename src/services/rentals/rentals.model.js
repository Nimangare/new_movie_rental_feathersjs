const Joi = require("joi");
const { objectId } = require("@feathers-plus/validate-joi-mongodb");
Joi.objectId = objectId;
const schema = Joi.object({
  customerId: Joi.objectId(),
  movieId: Joi.objectId(),
});

module.exports = schema;
