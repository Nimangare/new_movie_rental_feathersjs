module.exports = function () {
  return async (context) => {
    const movieId = context.data.movieId;
    const movieService = context.app.service("movies");
    const movie = await movieService.get(movieId);
    if (movie.numberInStock == 0)
      throw new Error({ message: "Movie out of stock" });

    context.data.movie = movie;
    context.data.movie.numberInStock -= 1;
    return context;
  };
};
