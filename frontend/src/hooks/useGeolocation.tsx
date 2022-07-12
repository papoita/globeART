import { useState, useEffect } from "react";
import axios from "axios";
import { Location } from "../interfaces";

export default function useGeolocation() {
   
  const [location, setLocation] = useState<Location>( {
    allowLocation: false,
    coordinates: { lat: null, lon: null },
    city: "",
    country: "",
  });

  const onSuccess = (l: any) => {
    let lat = l.coords?.latitude;
    let lon = l.coords?.longitude;
    let apiURL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=302dd63e3014261e4e3639ec1b4d8716`;

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

  const onError = (error: any) => {
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
