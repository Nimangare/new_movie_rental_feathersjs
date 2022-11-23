module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const genreSchema = require("./genreSchema");
  const schema = new Schema(
    {
      title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
      },
      genre: {
        type: genreSchema(app),
        required: true,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
      },
      numberInStock: {
        type: Number,
        require: true,
        min: 0,
        max: 50,
      },
      liked: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
