import { useState, useEffect } from "react";
import axios from "axios";

export default function useGeolocation() {
  const [location, setLocation] = useState({
    displayLocation: false,
    coordinates: { lat: null, lon: null },
    city: "",
    country: "",
  });

  const [allow, setAllow] = useState(false);

  const onSuccess = (location) => {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    let apiURL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data);
        setLocation((prev) => ({
          ...prev,
          displayLocation: true,
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
      displayLocation: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    console.log(location);
    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
    }
    if (allow) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
     }
  }, [allow]);

  return {location, allow, setAllow};
}
