import { useState, useEffect } from "react";
import axios from "axios";

export default function useGeolocation() {
  
  interface Coordinates {
    lat?: number,
    lon?: number,
  }
  interface Error {
    code: string,
    message: string
  }
  interface Location {
    allowLocation: boolean,
    coordinates?: Coordinates,
    city?: string,
    country?: string,
    error?: Error,
  }

  const [location, setLocation] = useState<Location>( {
    allowLocation: false,
    coordinates: { lat: null, lon: null },
    city: "",
    country: "",
  });

  const onSuccess = (location) => {
    let lat = location?.coords?.latitude;
    let lon = location?.coords?.longitude;
    let apiURL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    axios
      .get(apiURL)
      .then((res) => {
        setLocation((prev) => ({
          ...prev,
          allowLocation: true,
          coordinates: { lat: lat, lon: lon },
          city: res.data[0].name,
          country: res.data[0].country,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onError = (error) => {
    setLocation({
      allowLocation: false,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location };
}
