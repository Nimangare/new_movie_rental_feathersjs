const { authenticate } = require("@feathersjs/authentication").hooks;
const Joi = require("joi");

const schema = require("./rentals.model");
const admin = require("../../hooks/admin");

const validate = require("@feathers-plus/validate-joi");

const fetchCustomer = require("./hooks/fetchCustomer");
const fetchMovie = require("./hooks/fetchMovie");
const setRentalFee = require("./hooks/setRentalFee");
const increaseNumberInStock = require("./hooks/increaseNumberInStock");
const decreaseNumberInStock = require("./hooks/decreaseNumberInStock");
const setMovie = require("./hooks/setMovie");
const setDate = require("./hooks/setDate");
const isDateInNull = require("./hooks/isDateInNull");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchCustomer(),
      fetchMovie(),
      setRentalFee(),
    ],
    update: [authenticate("jwt")],
    //add a hook for setting dateIn
    patch: [authenticate("jwt"), isDateInNull, setDate(), setMovie()],
    remove: [authenticate("jwt"), admin(), setMovie()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
    update: [],
    patch: [increaseNumberInStock()],
    remove: [increaseNumberInStock()],
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
