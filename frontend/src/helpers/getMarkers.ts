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

  interface Item {
    price: string;
    itemId: number;
    seller: string;
    collection: string;
    sold: boolean;
    name: string;
    country: string;
    image: string;
  }

  const getCoords = async (item: Item) => {
    let apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${item.name},${item.country}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    interface Coordinates {
      lon?: number;
      lat?: number;
    }
    
    let coordinates: Coordinates = {};

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
      lat: coords?.lat,
      lng: coords?.lon,
      color: "white"
    });
  }

  // Cache markers in localStorage
  window.localStorage.setItem('markers', JSON.stringify(result))

  return result;
}
