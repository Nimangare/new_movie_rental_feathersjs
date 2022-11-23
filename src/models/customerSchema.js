module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true,
      },
      phone: {
        type: String,
        minLength: 7,
        maxLength: 10,
        required: true,
      },
      isGold: {
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
