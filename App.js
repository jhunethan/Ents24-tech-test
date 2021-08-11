const axios = require("axios");

function generateVenueURI(town, venue) {
  if (!town || !venue) return "";

  function normaliseString(string) {
    if (!string) return "";
    return string.trim().toLowerCase().replace(/ /g, '-');
  }

  return ''
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
