import axios from "axios";
import loadMarketplaceItems from "./loadMarketplaceItems";

export async function getMarkers() {
  let result = [];

  const items = await loadMarketplaceItems();

  const getCoords = async (item) => {
    let apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${item.name},${item.country}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    let coordinates = {};

    try{
      const res = await(axios.get(apiURL))
      coordinates.lat = res.data[0].lat;
      coordinates.lon = res.data[0].lon;
      return coordinates;
    } catch (error) {
        console.log(error);
      };
    };

  for await (const item of items) {
    const coords = await getCoords(item);
    result.push({
      ...item,
      lat: coords.lat,
      lng: coords.lon,
      color: "white"
    });
  }
  return result;
}
