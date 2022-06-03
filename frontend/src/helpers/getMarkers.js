import axios from "axios";
import loadShopItems from "./loadShopItems";

export async function getMarkers() {
  // Check for cached items and return them if available
  const cachedMarkers = window.localStorage.getItem('markers');
  if (cachedMarkers?.length) {
    const parsedCache = JSON.parse(cachedMarkers);
    return parsedCache;
  }

  let result = [];

  const items = await loadShopItems();

  const getCoords = async (item) => {
    let apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${item.name},${item.country}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    let coordinates = {};

    try{
      const res = await(axios.get(apiURL))
      console.log(res)
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
      lat: coords?.lat,
      lng: coords?.lon,
      color: "white"
    });
  }

  // Cache markers in localStorage
  window.localStorage.setItem('markers', JSON.stringify(result))

  return result;
}
