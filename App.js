module.exports.generateVenueURI = function (town, venue) {
  if (!town || !venue) return "";

  function normaliseString(string) {
    return string.trim().toLowerCase().replaceAll(" ", "-");
  }

  const formattedTown = normaliseString(town);
  const formattedVenue = normaliseString(venue);

  return `/${formattedTown}-events/${formattedVenue}`;
};
