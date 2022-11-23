const { authenticate } = require("@feathersjs/authentication").hooks;

const schema = require("../customers/customers.model");
const validate = require("feathers-validate-joi");
const admin = require("../../hooks/admin");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema, { abortEarly: false }), authenticate("jwt")],
    update: [authenticate("jwt"), admin()],
    patch: [authenticate("jwt"), admin()],
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
