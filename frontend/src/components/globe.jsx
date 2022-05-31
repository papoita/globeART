import { useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";

export default function Globe({ handleShowModal, markers, userPoint }) {
  const globeEl = useRef();
  console.log(userPoint)

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
  }, []);

  return (
    <>
      <div className="flex justify-center h-screen">
        <ReactGlobe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          enableMarkerGlow={true}
          labelsData={markers}
          labelAltitude={0.002}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lng}
          labelText={(d) => d.name}
          labelSize={1.2}
          labelDotRadius={0.6}
          labelColor={(d) => d.color}
          labelResolution={2}
          onLabelClick={(d) => handleShowModal(d)}
          pointsData={userPoint}
          pointLat={(d)=> d.lat}
          pointLng={(d)=> d.lng}
          pointColor={(d)=> d.color}
          pointAltitude={0}
          pointRadius={1}
          width={660}
        />
      </div>
    </>
  );
}
