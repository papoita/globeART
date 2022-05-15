const axios = require("axios");

export async function getMarkers(items, location) {
  let markers = [];

  const getCoords = async (item) => {
    let apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${item.name},${item.country}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    let coordinates = {};

    axios
      .get(apiURL)
      .then((res) => {
        coordinates.lat = res.data[0].lat;
        coordinates.lon = res.data[0].lon;
      })
      .catch((error) => {
        console.log(error);
      });
    return coordinates;
  };

  for await (const item of items) {
    const coords = await getCoords(item);
    console.log("COORDS:", coords)
    console.log("LAT:", coords.lat)

    markers.push({
      name: item.name,
      lat: coords.lat,
      lon: coords.lon,
      color: item.name === location.city ? "purple" : "white",
    });
  }
  console.log("MARKERS", markers);
  return markers;
}
