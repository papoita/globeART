import React from 'react';
import ReactGlobe from 'react-globe.gl';
import places from './places'; 



  const SimpleGlobe = () => {
 

   
    return <ReactGlobe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

      labelsData={places}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelText={d => d.name}
      labelSize={d => 0.5 + d.size }
      labelDotRadius={d => 0.5 + d.size}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelResolution={2}
    />;
  };

  export default SimpleGlobe;