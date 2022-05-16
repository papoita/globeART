import { useState } from 'react';
import ReactGlobe from 'react-globe.gl';
import places from './places';

const Globe = ({ handleShowModal }) => {
  const props = {
    setFocus: {
      "New York": [40.73061, -73.935242],
    },
  };

  return (
    <>
      <ReactGlobe
        {...props}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        labelsData={places}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={(d) => 0.5 + d.size}
        labelDotRadius={(d) => 0.5 + d.size}
        labelColor={(d) => d.color}
        labelResolution={2}
        onLabelClick={() => handleShowModal()}
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
