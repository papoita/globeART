import {useState} from 'react';
import ReactGlobe from 'react-globe.gl';
import places from './places'; 
import { Modal, Button } from 'react-bootstrap';

  const SimpleGlobe = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        onLabelClick={() => handleShow()}
        // labelLink={d =>`href=${d.link}`}
    />;
    <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  };

  export default SimpleGlobe;

  //onGlobeClick?: (coords: { lat, lng }, event: MouseEvent) => void;

  // {d => d.addEventListener('click', (event) => {
  //   event.stopPropagation();
  //   return console.log(`node clicked: #${d.name}`);
  // })}