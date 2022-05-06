import React from 'react';
import ReactGlobe from 'react-globe.gl';
import places from './places'; 



  const SimpleGlobe = () => {
 

   
    return <ReactGlobe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

      labelsData={places}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelText={d => d.name}
      labelSize={d => 0.5 + d.size }
      labelDotRadius={d => 0.5 + d.size}
      labelColor={() => 'rgba(238, 130, 238, 0.75)'}
      labelResolution={2}
      // labelLink={d => 'href=d.link'}
    />;
  };

  export default SimpleGlobe;