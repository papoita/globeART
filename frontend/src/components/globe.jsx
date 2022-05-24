import { useState, useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";
import { getMarkers } from "../helpers/getMarkers";

const Globe = ({ handleShowModal }) => {
  let markers;
  const globeEl = useRef();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.4;
    
    (async function asyncHandler() {
      try {
        markers = await getMarkers();
        console.log("Globe - MARKERS", markers);
        if (markers) setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, [isLoaded, globeEl]);

  return (
    <>
      {/* {!isLoaded && (
        <div className="flex justify-center items-center h-screen">
          <img src="pig-spinner.png" className="animate-spin-slow"></img>
        </div>
      )} */}
      {/* {isLoaded && markers && <h1>Marker 1 Name: {markers[0].name}</h1>} */}
      <div className="flex justify-center h-screen">
        <ReactGlobe
          ref={globeEl}
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
          width={660}
        />
      </div>
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
