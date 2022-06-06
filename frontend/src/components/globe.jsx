import { useEffect, useState } from "react";
import ReactGlobe from "react-globe.gl";
import * as THREE from "three";

const MOBILE_BREAKPOINT = 768;

// Custom globe material
const globeMaterial = new THREE.MeshPhongMaterial();
globeMaterial.bumpScale = 10;
new THREE.TextureLoader().load(
  "//unpkg.com/three-globe/example/img/earth-water.png",
  (texture) => {
    globeMaterial.specularMap = texture;
    globeMaterial.specular = new THREE.Color("grey");
    globeMaterial.shininess = 6;
  }
);

export default function Globe({
  globeEl,
  handleShowModal,
  markers,
  userLocation,
}) {
  let isMobile = window.outerWidth <= MOBILE_BREAKPOINT;

  const [height, setHeight] = useState(window.outerHeight);
  const [width, setWidth] = useState(
    isMobile ? window.outerHeight * 0.75 : window.outerWidth
  );
  const userLat = userLocation.coordinates.lat;
  const userLon = userLocation.coordinates.lon;

  const ripple = [
    {
      lat: userLat,
      lng: userLon,
      maxR: 3,
      propagationSpeed: 2,
      repeatPeriod: 1000,
    },
  ];
  const colorInterpolator = (t) => `rgba(255,255,255,${Math.sqrt(1 - t)})`;

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

  useEffect(() => {
    setTimeout(() => {
      const directionalLight = globeEl.current
        .scene()
        .children.find((obj3d) => obj3d.type === "DirectionalLight");
      directionalLight && directionalLight.position.set(0, 1, 0.5);
    });
  }, []);

  const handleOnGlobeReady = () => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
    globeEl.current.pointOfView(MAP_CENTER, ROTATION_SPEED);
  };

  // Add stars
  const N = 300;
  const stars = [...Array(N).keys()].map((d) => ({
    // opacity: Math.random() + 0.1,
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    alt: Math.random() * 2 + 5,
    radius: Math.random() * 1.1,
    color: `rgba(255,255,255,1)`,
  }));
  // const [starOpacity, setStarOpacity] = useState(stars);

  useEffect(() => {
    window.addEventListener("resize", () => {
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

  // useEffect(() => {
  //   (function blinkStars() {
  //     starOpacity.forEach(d => {
  //       d.opacity === 1 ? d.opacity = 0 : d.opacity += 0.1
  //     });
  //     setStarOpacity(starOpacity.slice());
  //     requestAnimationFrame(blinkStars);
  //   })();
  // }, [])

  return (
    <>
      <div className="h-screen z-30">
        <ReactGlobe
          ref={globeEl}
          atmosphereAltitude={0.15}
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          globeMaterial={globeMaterial}
          customLayerData={stars}
          customThreeObject={(d) =>
            new THREE.Mesh(
              new THREE.SphereBufferGeometry(d.radius),
              new THREE.MeshLambertMaterial({ color: d.color })
            )
          }
          customThreeObjectUpdate={(obj, d) => {
            Object.assign(
              obj.position,
              globeEl.current.getCoords(d.lat, d.lng, d.alt)
            );
          }}
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
          ringsData={ripple}
          ringColor={() => colorInterpolator}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          showAtmosphere={true}
          height={height}
          width={width}
        />
      </div>
    </>
  );
}
