import { useState, useEffect } from 'react';

export default function useGeolocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: null, lon: null },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
    console.log(location);
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
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
        message: 'Geolocation is not supported by your browser',
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
