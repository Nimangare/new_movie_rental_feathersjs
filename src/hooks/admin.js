module.exports = function () {
  return function (context) {
    // console.log(context);
    if (!context.params.user.isAdmin) {
      throw new Error("Access Forbidden...");
    } else {
      return context;
    }
  };
};
