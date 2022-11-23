module.exports = async (context) => {
  const rentalsService = context.app.service("rentals");
  const rental = await rentalsService.get(context.id);

  if (rental.dateIn) {
    throw new Error("movie already return");
  }
  return context;
};
