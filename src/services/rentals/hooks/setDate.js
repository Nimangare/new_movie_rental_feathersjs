module.exports = function () {
  return function (context) {
    const date = new Date();
    context.data.dateIn = date;
    return context;
  };
};
