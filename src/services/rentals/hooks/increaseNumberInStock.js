module.exports = function () {
  return async (context) => {
    const movie = context.params.movie;
    // console.log(movie);

    const rentalsService = context.app.service("rentals");
    const rental = await rentalsService.get(context.id);
    console.log(rental);

    if (!rental.dateIn) {
      const movieService = context.app.service("movies");
      await movieService.patch(movie._id, { $inc: { numberInStock: 1 } });
    }
    return context;
  };
};
