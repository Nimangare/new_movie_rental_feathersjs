module.exports = function () {
  return async function (context) {
    const genreService = context.app.service("genres");
    const genre = await genreService.get(context.data.genreId);

    if (!genre) throw new Error("Genre is Not found...");
    context.data.genre = genre;

    return context;
  };
};
