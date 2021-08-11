const axios = require("axios");

function generateVenueURI(town, venue) {
  if (!town || !venue) return "";

  function normaliseString(string) {
    if (!string) return "";
    let formattedString = "";
    formattedString = string.trim();
    formattedString = formattedString.toLowerCase();
    formattedString = formattedString.replace(/ /g, '-');

    return formattedString;
  }

  const formattedTown = normaliseString(town);
  const formattedVenue = normaliseString(venue);

  return `/${formattedTown}-events/${formattedVenue}`;
}

function checkVenue() {
  const [, town, , venue] = process.env.npm_lifecycle_script.split('"');
  const URI = generateVenueURI(town, venue);

  axios
    .get(`https://www.ents24.com${URI}`)
    .then((data) => {
      console.log(data.status);
    })
    .catch((err) => console.log(err.response.status));
}

module.exports = { generateVenueURI, checkVenue };
