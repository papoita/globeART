import { useEffect, useState } from "react";
import { defaultDotMarkerOptions } from "react-globe.gl";
import ReactGlobe from "react-globe.gl";

const MOBILE_BREAKPOINT = 768;

export default function Globe({
  globeEl,
  handleShowModal,
  markers,
  userLocation,
}) {
  let isMobile = window.outerWidth <= MOBILE_BREAKPOINT;
  const [height, setHeight] = useState(
    isMobile ? window.outerHeight : window.outerWidth * 0.6
  );
  const [width, setWidth] = useState(
    isMobile ? window.outerHeight * 0.55 : window.outerWidth
  );
  const userLat = userLocation.coordinates.lat;
  const userLon = userLocation.coordinates.lon;

  const userPoint = [
    {
      lat: userLat,
      lng: userLon,
      color: "yellow",
    },
  ];

  const MAP_CENTER = { lat: userLat, lng: userLon, altitude: 2.5 };
  const ROTATION_SPEED = 500;

  const handleOnLabelClick = (d) => {
    globeEl.current.pointOfView(
      { lat: d.lat, lng: d.lng, altitude: 1 },
      ROTATION_SPEED
    );
    setTimeout(() => {
      handleShowModal(d);
    }, 200);
  };

  const handleOnGlobeReady = () => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
    globeEl.current.pointOfView(MAP_CENTER, ROTATION_SPEED);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("isMobile", isMobile);
      if (width <= MOBILE_BREAKPOINT) {
        isMobile = true;
      } else if (width > MOBILE_BREAKPOINT) {
        isMobile = false;
      }
      if (isMobile) {
        setHeight(window.outerHeight);
        setWidth(window.outerHeight);
      } else {
        setHeight(window.outerWidth * 0.6);
        setWidth(window.outerWidth);
      }
    });
  }, [height, width]);

  return (
    <>
      <div className="flex justify-center h-screen z-30">
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
          onLabelClick={(d) => handleOnLabelClick(d)}
          onGlobeReady={handleOnGlobeReady}
          pointsData={userPoint}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lng}
          pointColor={(d) => d.color}
          pointAltitude={0}
          pointRadius={1}
          height={height}
          width={width}
        />
      </div>
    </>
  );
}
