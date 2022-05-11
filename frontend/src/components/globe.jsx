import { useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";
import places from "./places";
import { useNavigate } from "react-router-dom";

const SimpleGlobe = () => {
  const globeEl = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.8;

    const MAP_CENTER = { lat: 45, lng: -75, altitude: 1.7 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  }, [globeEl]);

  return (
    <ReactGlobe
      ref={globeEl}
      showAtmosphere={true}
      atmosphereAltitude={0.2}
      atmosphereColor="purple"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      labelsData={places}
      labelLat={(d) => d.lat}
      labelLng={(d) => d.lng}
      labelText={(d) => d.name}
      labelSize={(d) => 0.8 + d.size}
      labelDotRadius={(d) => 0.8 + d.size}
      labelColor={() => "rgba(237,0,248, 0.95)"}
      labelResolution={2}
      onLabelClick={(d) => navigate(`/gallery/${d.name.toLowerCase()}`)}
    />
  );
};

export default SimpleGlobe;

{
  /* 
    onGlobeClick={()=> navigate("/gallery")}
      
    */
}
