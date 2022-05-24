import { useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";

export default function Globe({ handleShowModal, markers }) {

  const globeEl = useRef();
  console.log("GLOBE - Markers:", markers)


  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.2;
  }, []);

  return (
    <>
      <div className="flex justify-center h-screen">
        <ReactGlobe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
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
};
