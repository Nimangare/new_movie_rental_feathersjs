const { authenticate } = require("@feathersjs/authentication").hooks;
const schema = require("./genres.model");
const validate = require("@feathers-plus/validate-joi");

const admin = require("../../../src/hooks/admin");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    update: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      admin(),
    ],
    patch: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    remove: [authenticate("jwt"), admin()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
