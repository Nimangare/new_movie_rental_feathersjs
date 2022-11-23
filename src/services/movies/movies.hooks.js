const { authenticate } = require("@feathersjs/authentication").hooks;

const schema = require("./movies.model");
const admin = require("../../hooks/admin");

const validate = require("@feathers-plus/validate-joi");
const fetchGenre = require("./hooks/fetchGenre");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchGenre(),
    ],
    update: [authenticate("jwt"), fetchGenre(), admin()],
    patch: [
      authenticate("jwt"),
      // fetchGenre()
    ],
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
