import ReactGlobe from 'react-globe.gl';
import places from './places'; 

  const SimpleGlobe = ({handleShow}) => {
    
    
    const props = {
      setFocus: {
        "New York": [40.73061, -73.935242]
      },
    };

    return (
    <>
    <ReactGlobe {...props}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      
      labelsData={places}
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.name}
        labelSize={d => 0.5 + d.size }
        labelDotRadius={d => 0.5 + d.size}
        labelColor={d => d.color}
        labelResolution={2}
        onLabelClick={(d) => handleShow(d)}
        // labelLink={d =>`href=${d.link}`}
    />;
    </>
    )
  };

  export default SimpleGlobe;

  //onGlobeClick?: (coords: { lat, lng }, event: MouseEvent) => void;

  // {d => d.addEventListener('click', (event) => {
  //   event.stopPropagation();
  //   return console.log(`node clicked: #${d.name}`);
  // })}