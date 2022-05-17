import { useEffect, useState } from "react";
import ReactGlobe from "react-globe.gl";
import axios from "axios";
import places from "./places";
// import { getMarkers } from "../helpers/getMarkers";

const Globe = ({ handleShowModal, items }) => {
  const [markers, setMarkers] = useState();

  useEffect(() => {
    //Fetch coordinates from city name and country
    const getCoords = async (item) => {
      let apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${item.name},${item.country}&limit=1&appid=${process.env.REACT_APP_GEOCODING_API}`;

      let coordinates = {};

      try {
        const res = await axios.get(apiURL);
        coordinates.lat = res.data[0].lat;
        coordinates.lon = res.data[0].lon;
        return coordinates;
      } catch (error) {
        console.log(error);
      }
    };

    //Generate array of markers objects to be passed into Globe -> generate label for each item in marketplace
    const getMarkers = async (items) => {
      const result = [];
      for await (const item of items) {
        const coords = await getCoords(item);
        result.push({
          id: item.itemId,
          name: item.name,
          image: item.image,
          lat: coords.lat,
          lng: coords.lon,
          color: "white",
          // color: (item.name === location.city ? "purple" : "white"),
        });
      }
      // markers = result;
      setMarkers(result)
      console.log("MARKERS: ", markers);
    };
    console.log('items', items)
    if (!!items.length) {
      getMarkers(items);
    }
  }, []);

  const props = {
    setFocus: {
      "New York": [40.73061, -73.935242],
    },
  };
  console.log('markers', markers);
  return (
    <>
     
        <ReactGlobe
          {...props}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          labelsData={markers}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lng}
          labelText={(d) => d.name}
          labelSize={0.7}
          labelDotRadius={0.7}
          labelColor={(d) => d.color}
          labelResolution={2}
          onLabelClick={(d) => handleShowModal(d)}
        />
      
    </>
  );

  //   const globeEl = useRef()
  //   // useEffect(() => {
  //   //   globeEl.current.controls().autoRotate = true;
  //   //   globeEl.current.controls().autoRotateSpeed = 0.8;

  //   //   const MAP_CENTER = { lat: 45, lng: -75, altitude: 1.7 };
  //   //   globeEl.current.pointOfView(MAP_CENTER, 0);
  //   // }, [globeEl]);

  //   return <ReactGlobe

  //   ref={globeEl}
  //   showAtmosphere={true}
  //     atmosphereAltitude={0.2}
  //     atmosphereColor= "purple"
  //     globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
  //     backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

  //     labelsData={places}
  //     labelLat={d => d.lat}
  //     labelLng={d => d.lng}
  //     labelText={d => d.name}
  //     labelSize={d => 0.8 + d.size }
  //     labelDotRadius={d => 0.8 + d.size}
  //     labelColor={() => 'rgba(237,0,248, 0.95)'}
  //     labelResolution={2}
  //     // labelLink={d => 'href=d.link'}
  //   />;
};

export default Globe;
