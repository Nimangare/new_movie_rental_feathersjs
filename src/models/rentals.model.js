// rentals-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const movieSchema = require("./movieSchema");
module.exports = function (app) {
  const modelName = "rentals";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customer: new Schema({
        name: {
          type: String,
          minLength: 3,
          maxLength: 50,
          required: true,
        },
        phone: {
          type: String,
          minLength: 7,
          maxLength: 10,
          required: true,
        },
      }),

      movie: {
        type: movieSchema(app),
        required: true,
      },
      rentalFee: {
        type: Number,
        required: true,
        min: 0,
      },
      dateOut: {
        type: Date,
        default: Date.now,
      },
      dateIn: {
        type: String,
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
